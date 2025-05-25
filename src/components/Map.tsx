import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png?url';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png?url';
import styles from './Map.module.css'; // nuevo módulo CSS

// Icono por defecto para Leaflet
const DefaultIcon = L.icon({
  iconUrl: iconUrl,
  shadowUrl: iconShadowUrl,
});
L.Marker.prototype.options.icon = DefaultIcon;

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
