import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const HomeKnow = () => {
  const listKnow = [
    {
      image: "trenMaya.webp",
      title: "TREN MAYA",
      fields: [
        {
          quantity: "5",
          description: "Estados"
        },
        {
          quantity: "1,554",
          description: "KM"
        },
        {
          quantity: "21",
          description: "Estaciones de tren"
        },
        {
          quantity: "117",
          description: "Experiencias"
        }
      ],
      dir: ""
    },
    {
      image: "MOR-Tepoztlan-ExConventoNatividad-PuebloMagico-GerardoJuarez-4858_2-_1__11zon.webp",
      title: "DESTINOS",
      fields: [
        {
          quantity: "32",
          description: "estados llenos de sorpresas"
        },
        {
          quantity: "2,469",
          description: "ciudades y municipios"
        },
        {
          quantity: "10",
          description: "Ciudades Patrimonio de la Humanidad por la UNESCO"
        },
        {
          quantity: "440",
          description: "playas"
        }
      ],
      dir: ""
    },
    {
      image: "PUEBLOS-MAGICOS.webp",
      title: "PUEBLOS MÁGICOS",
      fields: [
        {
          quantity: "",
          description: "¡Ya son 177 Pueblos Mágicos!"
        },
        {
          quantity: "",
          description: "Opiniones"
        },
        {
          quantity: "",
          description: ""
        },
        {
          quantity: "",
          description: ""
        }
      ],
      dir: ""
    },
    {
      image: "f1evento.webp",
      title: "EVENTOS INTERNACIONALES",
      fields: [
        {
          quantity: "",
          description: "Eventos de talla internacional que ponen la atención del mundo en México."
        },
        {
          quantity: "",
          description: ""
        },
        {
          quantity: "",
          description: ""
        },
        {
          quantity: "",
          description: ""
        }
      ],
      dir: ""
    },
    {
      image: "Qroo_cancun_playa108.webp",
      title: "EXPERIENCIAS",
      fields: [
        {
          quantity: "",
          description: "Gastronomía"
        },
        {
          quantity: "",
          description: "Bodas"
        },
        {
          quantity: "",
          description: "Aventura"
        },
        {
          quantity: "",
          description: "Bienestar"
        },
        {
          quantity: "",
          description: "Sostenible"
        }
      ],
      dir: ""
    },
    {
      image: "CALENDARIO.webp",
      title: "CALENDARIO",
      fields: [
        {
          quantity: "",
          description: "Los eventos y fechas que deben estar en tu agenda para asistir."
        },
        {
          quantity: "",
          description: ""
        },
        {
          quantity: "",
          description: ""
        },
        {
          quantity: "",
          description: ""
        }
      ],
      dir: ""
    },
    {
      image: "MOR_xochicalco_t_156-_1__11zon.webp",
      title: "BLOG",
      fields: [
        {
          quantity: "",
          description: "Las notas y tendencias turísticas para tu siguiente viaje."
        },
        {
          quantity: "",
          description: ""
        },
        {
          quantity: "",
          description: ""
        },
        {
          quantity: "",
          description: ""
        }
      ],
      dir: ""
    },
    {
      image: "videos.webp",
      title: "VIDEOS",
      fields: [
        {
          quantity: "",
          description: "El destino del mes"
        },
        {
          quantity: "",
          description: "Lo imperdible"
        },
        {
          quantity: "",
          description: "Tips de personalidades"
        },
        {
          quantity: "",
          description: "Trivias"
        }
      ],
      dir: ""
    },
  ];

  const colors = [
    '166, 32, 140, .5',
    '229, 38, 25, .5',
    '236, 6, 139, .5',
    '253, 167, 0, .5',
    '136, 194, 67, .5',
    '3, 160, 175, .5'
  ];

  return (
    <div className="home-know-ctn">
      <div className="home-know-ctn-title">
        <h2 className="home-know-title">¿Qué México quieres conocer?</h2>
        <div className="home-know-ctn-description">
          <div>
            <p className="home-know-description-title">México es un país lleno de cultura, paisajes, experiencias, gastronomía y más.</p>
            {/*<p className="home-know-description">México es un gran mosaico que combina preciosos escenarios naturales, ciudades con herencia prehispánica, colonial y moderna, una amplia variedad de manjares exquisitos que deleitan paladares y fascinantes tradiciones que cautivan al visitante.</p>*/}
          </div>
          <div>
            <button
              type='button'
              className="home-know-description-btn"
            >Tour 360</button>
          </div>
        </div>
      </div>
      <div className="home-know-ctn-cards">
        {listKnow?.map(item => (
          <div className="home-know-ctn-card">
            <LazyLoadImage
              src={require(`../../assets/img/header/${item?.image}`)}
              alt={item?.title}
              className="home-know-card-img"
            />
            <div className="home-know-ctn-card-description" style={{ background: `rgba(${colors[Math.floor(Math.random() * 6)]})`}} >
              <p className="home-know-card-description-title">{item?.title}</p>
              {/* <div className="home-know-ctn-card-description-stats">
                {item?.fields?.map(field => (
                  <div className="home-know-ctn-card-stats">
                    <p className="home-know-card-stats-quantity">{field?.quantity}</p>
                    <p className="home-know-card-stats-description">{field?.description}</p>  
                  </div>
                ))}
              </div>*/}
              <button className="home-know-card-description-btn">
                {'>'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeKnow;