// === LEAFLET ===
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

const Leaflet = () => {
    return (

        <MapContainer center={[49.274820093275665, -123.10316587769572]} zoom={18} scrollWheelZoom={false} className="map-container">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[49.274820093275665, -123.10316587769572]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>

    );
};

export default Leaflet;