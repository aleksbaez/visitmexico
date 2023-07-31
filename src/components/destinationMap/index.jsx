import React from 'react';
import { useLocation } from 'react-router-dom';
import destinations from '../../assets/data/destinations/index.json';
import './styles.css';

const DestinationMap = () => {
  const location = useLocation();
  const stateId = location?.pathname?.split('/')[2];
  const getStateInfo = destinations?.states?.filter(state => state.id === stateId);
  const data = getStateInfo?.[0];

  const getList = () => (
    data?.descriptionBottom?.map((item, index) => (
      <li key={index} className="destination-map-desc-text-desc-li">
        {item?.text}
      </li>
    ))
  );

  return (
    <section className="destination-map-ctn revealTop">
      <div className="destination-map-desc-ctn">
        <h3 className="destination-map-desc-text-title">{data?.titleBottom}</h3>
        <ul className="destination-map-desc-text-desc">
          {getList()}
        </ul>
      </div>
    </section>
  )
};

export default DestinationMap;
