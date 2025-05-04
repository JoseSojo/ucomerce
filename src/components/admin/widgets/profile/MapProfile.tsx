'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
    iconUrl: '/location.png', // Ruta desde public/
    iconSize: [32, 32], // Tamaño del icono
    iconAnchor: [16, 32], // Punto de anclaje
    popupAnchor: [0, -32] // Donde se abre el popup
  });
  

export default function MapProfile() {
    const centerLocation = [-9.1900, -75.0152] as [number, number];

    const locations = [
        [-13.5167, -71.9788],
        [-6.0219, -77.8873],
        [-14.0880, -75.7644],
        [-12.5999, -69.1833],
        [-8.1091, -79.0215]
    ]

    return (
        <div>
            <MapContainer
                center={centerLocation}
                zoom={6} // Zoom para ver todo el país
                style={{ height: "600px", width: "100%" }}
            >
                {/* Capa base de OpenStreetMap */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {locations.map((location, index) => (
                    <Marker
                        key={index}
                        position={[location[0], location[1]]}
                        icon={customIcon}
                    >
                        <Popup>
                            <strong>Ubicación</strong>
                            <br />
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}
