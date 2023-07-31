import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Bg from '../../assets/img/header/CHIH_creel47.webp';
import './styles.css';

const HomeSuscribe = () => {
  const listSuscribe = {
    title: "Suscríbete para más noticias",
    description: "Entérate de nuestras últimas noticias o actualizaciones, te mantendremos infomados.",
    placeHolder: "Correo electrónico",
    button: {
      name: "Suscribir",
      dir: "/"
    }
  };
  return (
    <div className="home-suscribe-ctn">
      <LazyLoadImage 
        src={Bg}
        alt="suscríbete"
        className="home-suscribe-image"
      />
      <div className="home-suscribe-ctn-suscribe">
        <h5 className="home-suscribe-suscribe-title">{listSuscribe?.title}</h5>
        <p className="home-suscribe-suscribe-description">{listSuscribe?.description}</p>
        <div className="home-suscribe-ctn-form">
          <form>
            <label 
              htmlFor="homeInfo"
            >
            </label>
            <div>
              <input 
                id="homeInfo" 
                type="text" 
                name="searcherHome" 
                placeholder={listSuscribe?.placeHolder}
                className="home-searcher-suscribe-input"
              />
              <button 
                type='submit'
                className="home-searcher-suscribe-button"
              >
                {listSuscribe?.button?.name}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeSuscribe;