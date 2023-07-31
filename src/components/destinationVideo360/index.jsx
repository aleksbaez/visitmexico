import React from 'react';
import { useLocation } from 'react-router-dom';
import destinations from '../../assets/data/destinations/index.json';
import './styles.css';

const DestinationVideo360 = () => {
  const location = useLocation();
  const stateId = location?.pathname?.split('/')[2];
  const getStateInfo = destinations?.states?.filter(state => state.id === stateId);
  const data = getStateInfo?.[0];
  

  return (
    <section className="state-video-360-ctn">
      <iframe
        width="100%"
        height="100%"
        src={data?.urlVideoBottom}
        title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México."
        frameBorder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading='lazy'  
      />
    </section>
  )
};

export default DestinationVideo360;
