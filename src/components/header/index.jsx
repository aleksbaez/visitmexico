import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Rss from '../Rss';
import Logo from '../../assets/img/header/logo.png';
import './styles.css';

const Header = () => {
  const listSecondary = [
    { name:"Calendario", 
      dir: "/calendario"
    },
    { name:"Videos", 
      dir: "/videos"
    },
    { name:"Descargas", 
      dir: "/descargas"
    }
  ];

  const listPrimary = [
    { name:"Tren Maya", 
      dir: "/tren-maya"
    },
    { name:"Destinos", 
      dir: "/destinos/Puebla"
    },
    { name:"Pueblos Mágicos", 
      dir: "/pueblos-magicos"
    },
    { name:"Eventos Internacionales", 
      dir: "/eventos-internacionales"
    },
    { name:"Experiencias", 
      dir: "/experiencias",
      menu: [
        {
          name:"Bodas", 
          dir: "/bodas",
          image: "Pareja-Queretaro-3.webp"
        },
        {
          name:"Gastronomía", 
          dir: "/gastronomia",
          image: "Dgo_Ciudad_Durango421.webp"
        },
        {
          name:"Sol y playa", 
          dir: "/sol-y-playa",
          image: "Qroo_cancun_playa108.webp"
        },
        {
          name:"Aventura", 
          dir: "/aventura",
          image: "SIN_guanacoa_257.webp"
        },
        {
          name:"Bienestar", 
          dir: "/bienestar",
          image: "MOR_Tepoztlan_HotelDosPiedras_LGBT-33.webp"
        },
        {
          name:"Sostenible", 
          dir: "/sostenible",
          image: "BCS_tiburonballena.webp"
        }
      ]
    },
    { name:"Blog", 
      dir: "/blog"
    },
    { name:"Guías Turísticas", 
      dir: "/guias-turisticas"
    }
  ];

  const listLanguages = [
    { name:"Español", 
      value: "ES"
    },
    { name:"English", 
      value: "EN"
    }
  ];

  const listMenuSecondary = () => (
    listSecondary?.map(item => (
      <li className="header-menu-li-secondary" key={item.name}>
        <Link to={item.dir}>
          {item.name}
        </Link>
      </li>
    ))
  );

  const listMenuPrimary = () => (
    listPrimary?.map(item => (
      <li className="header-menu-li-primary" key={item.name}>
        <Link to={item.dir}>
          {item.name}
        </Link>
        {item?.menu &&
          <div className="header-ctn-submenu-primary">
          {item?.menu?.map(subItem => (
            <div className="header-ctn-submenu-link-primary">
              <Link to={subItem.dir} className="header-submenu-link-primary">
                {subItem.name}
              </Link>
              <LazyLoadImage
                  src={require(`../../assets/img/header/${subItem.image}`)}
                  alt='logo visitmexico'
                  className="header-submenu-link-img-primary"
                />
            </div>
          ))}
          </div>
        }
      </li>
    ))
  );

  const languages = () => (
    listLanguages?.map(item => (
      <option value={item.value} key={item.name}>{item.name}</option>
    ))
  );

  return (
    <div className="header-ctn">
      
      <div className="header-ctn-logo">
        <LazyLoadImage
          src={Logo}
          alt='logo visitmexico'
          className="header-logo"
        />
      </div>
      <nav className="header-ctn-menu">
        <div className="header-ctn-menu-ul-secondary">
          <ul className="header-menu-ul-secondary">
            {listMenuSecondary()}
            <select className="header-menu-select">
              {languages()}
            </select>
          </ul>
        </div>
        <div className="header-ctn-menu-ul-primary">
          <ul className="header-menu-ul-primary">
            {listMenuPrimary()}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;