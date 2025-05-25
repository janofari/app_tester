'use client';

import { useState } from "react";
import dynamic from "next/dynamic";
import { Eye, EyeOff } from "lucide-react";

import Navbar from "@/components/Navbar";
import {sampleProjects } from "@/components/namesandpatterns";
import styles from "./page.module.css";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });


export default function HomePage() {
  const [visibleMarkers, setVisibleMarkers] = useState<number[]>([]);

  const toggleMarker = (id: number) => {
    setVisibleMarkers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className={styles.container}>
      
      {/* Insercion de la navbar */}
      <Navbar />

      <div className={styles.content}>

        {/* Tabla a la izquierda */}

        <div className={styles.tableSection}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Ubicación</th>
                <th>Estado</th>
                <th>Visibilidad</th>
              </tr>
            </thead>
            <tbody>
              {sampleProjects.map((project) => (
                <tr key={project.id}>
                  <td>{project.name}</td>
                  <td>{project.location}</td>
                  <td>{project.status}</td>
                  <td>
                    <button
                      className={styles.eyeButton}
                      onClick={() => toggleMarker(project.id)}
                      title={visibleMarkers.includes(project.id) ? "Ocultar del mapa" : "Mostrar en el mapa"}
                    >
                      {visibleMarkers.includes(project.id) ? (
                        <Eye size={18} color="#2563eb" />
                      ) : (
                        <EyeOff size={18} color="#666" />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        {/* Mapa a la derecha */}

        <div className={styles.mapSection}>
          <Map
            projects={sampleProjects.filter((p) => visibleMarkers.includes(p.id))}
          />
        </div>
      </div>
    </div>
  );
}