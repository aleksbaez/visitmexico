import React from 'react';
import { useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ExperienceContent from '../experienceContent';
import experiences from '../../assets/data/experiences/index.json';
import './styles.css';

const ExperienceImages = () => {
  const location = useLocation();
  const stateId = location?.pathname?.split('/')[2];
  const getStateInfo = experiences?.experiences?.filter(experience => experience.id === stateId);
  const data = getStateInfo?.[0];

  const colors = [
    '166, 32, 140, .5',
    '229, 38, 25, .5',
    '236, 6, 139, .5',
    '253, 167, 0, .5',
    '136, 194, 67, .5',
    '3, 160, 175, .5'
  ];

  const getGallery = () => (
    data?.gallery?.map(item => (
      <div className="experience-images-ctn-img-experience">
        <a href={item?.dir} target="_blank" rel="noopener noreferrer">
          <LazyLoadImage 
            src={require(`../../assets/img/experiences/${item?.imageUrl}`)}
            alt={item?.title}
            className="experience-images-img-experience"
          />
          <div className="experience-images-ctn-img-experience-description" style={{ background: `rgba(${colors[Math.floor(Math.random() * 6)]})`}}>
            <p className="experience-images-img-experience-description">{item?.title}</p>
          </div>
        </a>
      </div>
    ))
  )

  return (
    <section className="experience-images-ctn">
      <div className="experience-images-ctn-hero">
        <div className="experience-images-ctn-hero-description">
          <h1 className="experience-images-title">{data?.title}</h1>
          <ExperienceContent />
        </div>
        <LazyLoadImage
          src={require(`../../assets/img/experiences/${data?.gallery[0]?.imageUrl}`)}
          alt={data?.gallery[0]?.title}
          className="experience-images-img-experience-hero"
        />
      </div>
      <div className="experience-images-ctn-img">
        {getGallery()}
      </div>
    </section>
  )
};

export default ExperienceImages;
