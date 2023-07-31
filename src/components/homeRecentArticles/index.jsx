import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const HomeRecentArticles = () => {
  const listRecentArticles = {
    title: "Artículos Recientes",
    subtitle: "Nuestro blog te puede ser de gran ayuda para conocer algunos tips o detalles que tienes que saber si decides viajar a algunos de los lugares turísticos de México.",
    button : {
      name: "Ver Todos",
      dir: "/"
    },
    articles: [
      {
        image: "SON_SanCarlos_Mirador-138_11zon.webp",
        date: "15 de Julio, 2022",
        title: "Las mejores 10 playas de México",
        type: "Categorias",
        category: "Curiosidades"
      },
      {
        image: "TRAVESIA-3(1).webp",
        date: "15 de Julio, 2022",
        title: "Las 5 principales atracciones turísticas",
        type: "Categorias",
        category: "Curiosidades"
      },
      {
        image: "Hgo_tula_003.webp",
        date: "15 de Julio, 2022",
        title: "Esto es lo que debes conocer de Hidalgo",
        type: "Categorias",
        category: "Curiosidades"
      }
    ]
  };

  const articles = () => (
    listRecentArticles?.articles?.map(item => (
      <div className="home-recent-articles-ctn-card">
        <div className="home-recent-articles-ctn-card-image">
          <LazyLoadImage 
            src={require(`../../assets/img/header/${item?.image}`)}
            alt={item?.title}
            className="home-recent-articles-card-image"
          />
          <p className="home-recent-articles-card-date">{item?.date}</p>
        </div>
        <div className="home-recent-articles-ctn-card-info">
          <p className="home-recent-articles-card-info-date">{item?.date}</p>
          <p className="home-recent-articles-card-info-title">{item?.title}</p>
          <p className="home-recent-articles-card-info-category">{item?.type}: {item?.category}</p>
        </div>
      </div>
    ))
  );

  return (
    <div className="home-recent-articles-ctn">
      <div className="home-recent-articles-ctn-content">
        <h5 className="home-recent-articles-title">{listRecentArticles?.title}</h5>
        <div className="home-recent-articles-ctn-subtitle">
          <p className="home-recent-articles-subtitle">{listRecentArticles?.subtitle}</p>
          <Link 
            to={listRecentArticles?.button?.dir}
            className="home-recent-articles-subtitle-button"
          >
            {listRecentArticles?.button?.name}
          </Link>
        </div>
        <div className="home-recent-articles-ctn-cards">
          {articles()}
        </div>
      </div>
    </div>
  );
};

export default HomeRecentArticles;