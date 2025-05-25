import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


import styles from './Map.module.css'; // nuevo módulo CSS


// Icono personalizado usando un SVG desde /public
const CustomIcon = new L.Icon({
  iconUrl: "/icons/LocationIcon.png",
  iconSize: [28, 28],          // Tamaño del icono
  iconAnchor: [14, 28],        // Punto donde el marcador se ancla al mapa
  popupAnchor: [0, -28],       // Punto desde donde se abre el popup
});

L.Marker.prototype.options.icon = CustomIcon;

interface Project {
  id: number;
  name: string;
  location: string;
  status: string;
  lat: number;
  lng: number;
}

export default function Map({ projects }: { projects: Project[] }) {
  const center: [number, number] = [41.39, 2.16];

  return (
    <div className={styles.mapWrapper}>
      <MapContainer
        center={center}
        zoom={10}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {projects.map((project) => (
          <Marker key={project.id} position={[project.lat, project.lng]}>
            <Popup>
              <strong>{project.name}</strong><br />
              {project.location}<br />
              {project.status}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
