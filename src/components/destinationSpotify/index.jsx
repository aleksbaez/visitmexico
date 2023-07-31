import React from 'react';
import { useLocation } from 'react-router-dom';
import destinations from '../../assets/data/destinations/index.json';
import './styles.css';

const DestinationSpotify = () => {
  const location = useLocation();
  const stateId = location?.pathname?.split('/')[2];
  const getStateInfo = destinations?.states?.filter(state => state.id === stateId);
  const data = getStateInfo?.[0];

  return (
    <section className="destination-spotify-ctn">
      <div className="destination-spotify-ctn-iframe">
        <iframe
          src={data?.urlMap}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="destination-spotify-ctn-iframe">
        <iframe
          src={data?.urlSpotify}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </section>
  )
};

export default DestinationSpotify;