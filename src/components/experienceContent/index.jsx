import React from 'react';
import { useLocation } from 'react-router-dom';
import experiences from '../../assets/data/experiences/index.json';
import './styles.css';

const ExperienceContent = () => {
  const location = useLocation();
  const stateId = location?.pathname?.split('/')[2];
  const getStateInfo = experiences?.experiences?.filter(experience => experience.id === stateId);
  const data = getStateInfo?.[0];

  const getDescription = () => (
    data?.description?.map((item, index) => (
      <p key={index}>{item?.text}</p>
    ))
  );

  return (
    <section className="experience-content-ctn">
      <div className="experience-content-ctn-description">
        {getDescription()}
      </div>
    </section>
  )
};

export default ExperienceContent;
