import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";

function Maps({ location, name }) {
  const { latitude, longitude } = location;
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={12}
      scrollWheelZoom={true}
      className="lg:w-full w-full md:h-72 h-52 lg:h-60"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Maps;
Maps.propTypes = {
  location: PropTypes.object,
  name: PropTypes.string,
};
