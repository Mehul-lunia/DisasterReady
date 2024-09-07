import {React,useEffect,useState} from "react";
import {Map as GMap,Pin,AdvancedMarker, APIProvider} from "@vis.gl/react-google-maps";


function Map() {

  const [markers,setMarkers] = useState([]);
  useEffect(async ()=>
    {
      const response = await fetch("https://nominatim.openstreetmap.org/search?q=Muzaffarpur&format=json");
      const res = await response.json();
      let lat = response.lat;
      let lon = response.lon;
      setMarkers([...markers,{key:"Muzaffarpur",location:{lat : parseInt(lat),lng : parseInt(lon)}}]);
    }
  ,[])

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: '100dvh', width: '100%' }}>
      <APIProvider apiKey="AIzaSyADTxS8infbfwUU7kfBjGR2-jjb17fLNtk">

      <GMap
        bootstrapURLKeys={{}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        >
        {markers.length > 0 && markers.map( (poi) => (
          <AdvancedMarker
          key={poi.key}
          position={poi.location}>
        <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
      </GMap>
      </APIProvider>
    </div>
  );
}

export default Map;
