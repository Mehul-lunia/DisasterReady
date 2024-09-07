from flask import Flask, jsonify, request
import requests
from bs4 import BeautifulSoup
import re
import pandas as pd
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# URLs and payload remain the same
LOGIN_URL = "https://aff.india-water.gov.in/index.php"
DATA_URL = "https://aff.india-water.gov.in/table.php"

payload = {
    "username": "DctheGreat",
    "password": "scoobydinofigo",
    "login_user": "Login"
}


def clean_text(text):
    text = re.sub(r'\s+', ' ', text).strip()
    text = re.sub(r'<[^>]+>', '', text)
    return text if text else np.nan  # Return NaN for empty strings


def fetch_flood_data():
    s = requests.session()
    login_response = s.post(LOGIN_URL, data=payload, allow_redirects=True)

    if login_response.status_code == 200:
        data_response = s.get(DATA_URL)
        soup = BeautifulSoup(data_response.content, "html.parser")
        flood_table = soup.find("table", id="Flood1")

        if flood_table:
            rows = flood_table.find_all("tr")
            data = []
            for row in rows:
                row_data = [clean_text(cell.text) for cell in row.find_all(["th", "td"])]
                if any(cell is not np.nan for cell in row_data):
                    data.append(row_data)

            if data:
                df = pd.DataFrame(data[1:], columns=data[0])
                df = df.replace('', np.nan)

                cols = pd.Series(df.columns)
                for dup in cols[cols.duplicated()].unique():
                    cols[cols[cols == dup].index.values.tolist()] = [dup + '_' + str(i + 1) if i != 0 else dup for i in
                                                                     range(sum(cols == dup))]
                df.columns = cols

                return df

    return None



@app.route('/', methods=['GET'])
def get_all_flood_data_subsets():
    df = fetch_flood_data()
    if df is not None:
        first_six_cols = df.iloc[:, :5]
        remaining_cols = df.columns[6:]
        cols_per_dataset = 3

        all_datasets = []

        for dataset_index in range((len(remaining_cols) + cols_per_dataset - 1) // cols_per_dataset):
            start_idx = dataset_index * cols_per_dataset
            end_idx = min(start_idx + cols_per_dataset, len(remaining_cols))
            current_cols = remaining_cols[start_idx:end_idx]

            current_df = pd.concat([first_six_cols, df[current_cols]], axis=1)
            current_df.dropna(inplace=True)

            all_datasets.append({
                "dataset_index": dataset_index,
                "columns": list(current_df.columns),
                "data": current_df.to_dict(orient='records')
            })

        return jsonify(all_datasets)
    else:
        return jsonify({"error": "Failed to fetch flood data"}), 500

@app.route('/dataset/<int:dataset_index>', methods=['GET'])
def get_specific_dataset(dataset_index):
    df = fetch_flood_data()
    if df is not None:
        first_six_cols = df.iloc[:, :5]
        remaining_cols = df.columns[6:]
        cols_per_dataset = 3

        start_idx = dataset_index * cols_per_dataset
        end_idx = min(start_idx + cols_per_dataset, len(remaining_cols))
        current_cols = remaining_cols[start_idx:end_idx]

        current_df = pd.concat([first_six_cols, df[current_cols]], axis=1)
        current_df.dropna(inplace=True)

        return jsonify({
            "dataset_index": dataset_index,
            "columns": list(current_df.columns),
            "data": current_df.to_dict(orient='records')
        })
    else:
        return jsonify({"error": "Failed to fetch flood data"}), 500
if __name__ == '__main__':
    app.run(debug=True)