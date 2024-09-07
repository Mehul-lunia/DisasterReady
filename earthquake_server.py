from flask import Flask, jsonify
import re
from datetime import datetime, timedelta, timezone
import requests
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Implement Pagination from the backend itself

@app.route('/api/v1/', methods=['GET'])
def get_earthquakes():
    # Define the API endpoint
    base_url = "https://earthquake.usgs.gov/fdsnws/event/1/query"

    # Set parameters for the query (using recommended UTC time handling)
    current_utc_time = datetime.now(timezone.utc)
    params = {
        "format": "geojson",
        "starttime": (current_utc_time - timedelta(days=10)).isoformat(),
        "endtime": current_utc_time.isoformat(),
        "minmagnitude": 4.5,
        "orderby": "time"
    }

    # Make the API request
    response = requests.get(base_url, params=params)

    # Check if the request was successful
    data = response.json()
    earthquakes = data.get('features', [])

    if not earthquakes:
        return jsonify({"message": "No earthquake data available."}), 404

    # Parse earthquake data
    location = []
    magnitude = []
    date_time = []
    link = []
    for quake in earthquakes:
        props = quake['properties']
        location.append(props["place"])
        magnitude.append(props["mag"])
        date_time.append(datetime.fromtimestamp(props['time'] / 1000).strftime('%Y-%m-%d %H:%M:%S UTC'))
        link.append(props["url"])

    # Create a DataFrame
    dataset = {
        "Region": location,
        "Magnitude": magnitude,
        "Date_Time": date_time,
        "url": link
    }
    earthquake_df = pd.DataFrame(dataset)

    def clean_location(location):
        # This regex pattern matches any number of digits,
        # followed by "km", optional spaces,
        # then 1-3 letters (for direction), "of", and optional spaces
        pattern = r'^\d+ km\s*[A-Z]{1,3}\s*of\s*'
        return re.sub(pattern, '', location).strip()

    earthquake_df["Region"] = earthquake_df["Region"].apply(clean_location)

    # Convert DataFrame to JSON

    # currPage_startIdx = (idx - 1) * 5
    # currPage_endIdx = idx * 5
    # if currPage_endIdx > earthquake_df.shape[0]: return jsonify({"message" : "Page number is out-of-bounds!"})
    # earthquake_df = earthquake_df.iloc[currPage_startIdx:currPage_endIdx,:]
    result = earthquake_df.to_dict(orient='records')
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True,port=5500)
