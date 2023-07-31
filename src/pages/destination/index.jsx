import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import DestinationVideo from '../../components/destinationVideo';
import DestinationKnown from '../../components/destinationKnow';
import DestinationMap from '../../components/destinationMap';
import DestinationSpotify from '../../components/destinationSpotify';
import DestinationVideo360 from '../../components/destinationVideo360';
import './styles.css';

const Destination = () => {
  return (
    <div className="main-content">
      <DestinationVideo />
      <LazyLoadComponent>
        <DestinationKnown />
        <DestinationMap />
        <DestinationSpotify />
        <DestinationVideo360 />
      </LazyLoadComponent>
    </div>
  )
};

export default Destination;
