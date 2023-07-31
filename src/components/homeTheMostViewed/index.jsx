import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const HomeTheMostViewed = () => {

  const listMostViewed = {
    title:"Lo más visitado",
    sections: [
      {
        name: "Tren Maya",
        imgage: "trenMaya.webp",
        dir: "/tren-maya"
      },
      {
        name: "Bodas",
        imgage: "MOR_xochicalco_t_156-_1__11zon.webp",
        dir: "/bodas"
      },
      {
        name: "Playas",
        imgage: "Qroo_cancun_playa108.webp",
        dir: "/playas"
      },
      {
        name: "Ruta Gastronómica",
        imgage: "MOR-Tepoztlan-ExConventoNatividad-PuebloMagico-GerardoJuarez-4858_2-_1__11zon.webp",
        dir: "/ruta-gastronómica"
      },
      {
        name: "Pueblos Mágicos",
        imgage: "PUEBLOS-MAGICOS.webp",
        dir: "/pueblos-magicos"
      }
    ]
  };

  const sections = () => (
    listMostViewed?.sections?.map((item, index) => (
      <div className={`home-the-most-viewed-ctn-sections-card-${index}`} key={item?.name}>
        <Link to={item?.dir}>
          <LazyLoadImage 
            src={require(`../../assets/img/header/${item?.imgage}`)}
            alt={item?.name}
            className="home-the-most-viewed-sections-card-img"
          />
          <div className="home-the-most-viewed-ctn-sections-card-hover">
            <p className="home-the-most-viewed-sections-card-hover-title">{item?.name}</p>
          </div>
        </Link>
      </div>
    ))
  );

  return (
    <div className="home-the-most-viewed-ctn">
      <h3 className="home-the-most-viewed-title">{listMostViewed?.title}</h3>
      <div className="home-the-most-viewed-ctn-sections">
        {sections()}
      </div>
    </div>
  );
};

export default HomeTheMostViewed;