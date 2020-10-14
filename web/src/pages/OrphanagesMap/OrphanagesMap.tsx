import React from 'react';
import mapMarker from '../../img/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './OrphanagesMap.module.css';

function OrphanagesMap() {
  return (
    <div className={styles.pageMap}>
      <aside>
        <header>
          <img src={mapMarker} alt="Happy" />
          <h2>
            Escolha
            <br /> um orfanato no mapa
          </h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Lagarto</strong>
          <span>Sergipe</span>
        </footer>
      </aside>

      <Map
        center={[-10.9170367, -37.6707433]}
        zoom={14}
        style={{ width: 'Calc(100% - 400px)', height: '100%' }}
        className={styles.map}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className={styles.createOrphanages}>
        <FiPlus size={32} color="FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
