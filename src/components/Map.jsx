import { GoogleMap, Marker } from "@react-google-maps/api";

export default function Map(center) {
  return <div>
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center}/>
    </GoogleMap>
  </div>
}
