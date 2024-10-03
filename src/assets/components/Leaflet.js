import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import LeafletText from './LeafletText';

// === ICONS ===
import { Icon } from './Icon';

const Leaflet = () => {
    return (

        <section className="leaflet-section">
            <MapContainer center={[49.274820093275665, -123.10316587769572]} zoom={18} scrollWheelZoom={false} className="map-container">
                <TileLayer
                    attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                />
                <Marker 
                    position={[49.274820093275665, -123.10316587769572]}
                    icon={Icon}
                >
                </Marker>
            </MapContainer>
            <LeafletText />
        </section>

    );
};

export default Leaflet;
