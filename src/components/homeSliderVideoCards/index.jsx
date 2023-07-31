import React from 'react';
import Carousel from 'react-spring-3d-carousel';
import './styles.css';

const HomeSliderVideoCards = () => {
  const slides = [
    {
      key: "1",
      content: <iframe width="1280" height="720" src="https://www.youtube.com/embed/EjNe5EJ1cAQ" title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
    },
    {
      key: "2",
      content: <iframe width="1280" height="720" src="https://www.youtube.com/embed/l2h0Ukm-ff8" title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
    },
    {
      key: "3",
      content: <iframe width="1280" height="720" src="https://www.youtube.com/embed/al82Sxc5I9I" title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
    },
    {
      key: "4",
      content: <iframe width="1280" height="720" src="https://www.youtube.com/embed/fupvRk-CQmw" title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
    },
    {
      key: "5",
      content: <iframe width="1280" height="720" src="https://www.youtube.com/embed/ZXaWISbavFg" title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
    }
  ];
  return (
    <div className="home-slider-video-cards-ctn">
      <Carousel slides={slides} showNavigation={true}/>
    </div>
  );
};

export default HomeSliderVideoCards;