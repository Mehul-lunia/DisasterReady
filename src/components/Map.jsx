import React from "react";
import GMap from "google-map-react";

function Map() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GMap
        bootstrapURLKeys={{ key: "AIzaSyADTxS8infbfwUU7kfBjGR2-jjb17fLNtk" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GMap>
    </div>
  );
}

export default Map;
