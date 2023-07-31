import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const HomeSunBeachAndSand = () => {
  const listSunBeachAndSand = {
    image: "Qroo_cancun_playa108.webp",
    title: "Sol, Playa y Arena",
    subtitle: "Las mejores playas están en México",
    description: "La <b>privilegiada ubicación de México</b> le permite estar “bañado” por el <b>Océano Pacífico, el Golfo de México y el Mar Caribe</b>, lo que hace de nuestro país un <b>destino paradisiaco</b> para los turistas que buscan sol y playa. Las largas <b>extensiones de costa</b> que superan los <b>11 mil kilómetros</b> permiten que cada playa sea única por sí misma, con aguas de <b>distintas tonalidades y arena de diferentes texturas</b>. La flora y fauna marina también hacen de México un imán de visitantes de todas partes del mundo. <b>El Mar de Cortés</b>, considerado <b>“el acuario del mundo”</b>; la hermosa <b>Bahía de Acapulco</b>, con uno de los climas más privilegiados de todo el planeta; y las <b>playas oaxaqueñas</b> cuyo oleaje es perfecto para la <b>práctica del surf</b>, son solo algunos ejemplos de lo que se puede disfrutar en el <b>Pacífico Mexicano</b>; mientras que del lado del Golfo de México encontramos la <b>Costa Esmeralda en Veracruz</b>, y qué decir del <b>azul turquesa del Caribe Mexicano</b>, con su blanca arena.",
    button: {
      title: "Vamos",
      dir: "/sol-playa-y-arena"
    }
  };

  const makeBold = (item, keyword) => {
    var re = new RegExp(keyword, 'g')
    return (
        item.replace(re, '<b>'+keyword+ '</b>')
    )
  }
  return (
    <div className="home-sun-beach-and-sand-ctn">
      <div className="home-sun-beach-and-sand-ctn-card">
        <LazyLoadImage 
          src={require(`../../assets/img/header/${listSunBeachAndSand?.image}`)}
          alt={listSunBeachAndSand?.title}
          className="home-sun-beach-and-sand-card-img"
        />
        <div className="home-sun-beach-and-sand-ctn-card-description">
          <h4 className="home-sun-beach-and-sand-card-description-title">{listSunBeachAndSand?.title}</h4>
          <p className="home-sun-beach-and-sand-card-description-subtitle">{listSunBeachAndSand?.subtitle}</p>
          <p className="home-sun-beach-and-sand-card-description-description" 
            dangerouslySetInnerHTML={{__html: 
             listSunBeachAndSand?.description
            }} 
            
          />
          <Link 
            to={listSunBeachAndSand?.button?.dir}
            className="home-sun-beach-and-sand-card-description-button"
          >
            {listSunBeachAndSand?.button?.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSunBeachAndSand;