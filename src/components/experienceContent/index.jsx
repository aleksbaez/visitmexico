import React ,{useContext}from 'react';
import { useLocation } from 'react-router-dom';
//import experiences from '../../assets/data/experiences/index.json';
import './styles.css';
import { langContext } from '../../context/langContext';
import { FormattedMessage } from 'react-intl';

const ExperienceContent = () => {
  const idioma2=useContext(langContext);
  const location = useLocation();
  const stateId = location?.pathname?.split('/')[2];
  const getStateInfo = idioma2.messages.experiences?.filter(experience => experience.id === stateId);
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
