import L from 'leaflet';

const Icon = new L.icon({
    iconUrl: require('../icons/pin.png'),
    iconRetinaUrl: require('../icons/pin.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
});

export { Icon };