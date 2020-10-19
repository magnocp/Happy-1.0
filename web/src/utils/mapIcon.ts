import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [40, 68],
    iconAnchor: [20, 68],
    popupAnchor: [170, 2],
})

export default mapIcon;