import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import destinations from '../../assets/data/destinations/index.json';
import './styles.css';

const DestinationKnown = () => {
  const location = useLocation();
  const stateId = location?.pathname?.split('/')[2];
  const getStateInfo = destinations?.states?.filter(state => state.id === stateId);
  const data = getStateInfo?.[0];

  return (
    <section className="destination-known-ctn">
      <h2 className="destination-known-title">{data?.titleTop}</h2>
      <div className="destination-known-ctn-content">
        <div className="destination-known-ctn-img">
        {getStateInfo?.map((data, index) => (
          <LazyLoadImage
            className="destination-known-img"
            src={require(`../../assets/img/destinations/${data.urlImg}`)}
            alt={data?.titleTop}
            key={index}
          />
        ))}
        </div>
        <div className="destination-known-ctn-description">
          <p className="destination-known-description-text">{data?.descriptionTop} </p>
          <a
            href={data?.actions?.button?.dir}
            target="_blank"
            rel="noopener
            noreferrer"
            className="destination-known-description-btn"
          >
            {data?.actions?.button?.text}
          </a>
        </div>
      </div>      
    </section>
  )
};

export default DestinationKnown;
