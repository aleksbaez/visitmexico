import React from 'react';
import { useLocation } from 'react-router-dom';
import experiences from '../../assets/data/experiences/index.json';
import './styles.css';

const ExperienceVideo = () => {
  const location = useLocation();
  const stateId = location?.pathname?.split('/')[2];
  const getStateInfo = experiences?.experiences?.filter(experience => experience.id === stateId);
  const data = getStateInfo?.[0];

  return (
    <section className="experience-video-top-ctn">
      <iframe
        width="100%"
        height="100%"
        src={data?.urlVideoTop}
        title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México."
        frameBorder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading='lazy'  
      />
    </section>
  )
};

export default ExperienceVideo;
