import React,{useContext} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Rss from '../Rss';
import Logo from '../../assets/img/header/logo.png';
import './styles.css';
import { langContext } from '../../context/langContext';
import { FormattedMessage } from 'react-intl';

const Header = () => {

const idioma=useContext(langContext);

  /*const listSecondary = [
    { name:"Calendario", 
      dir: "/calendario"
    },
    { name:"Videos", 
      dir: "/videos"
    },
    { name:"Descargas", 
      dir: "/descargas"
    }
  ];*/

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
          dir: "/experiencias/bodas",
          image: "Pareja-Queretaro-3.webp"
        },
        {
          name:"Gastronomía", 
          dir: "/experiencias/gastronomia",
          image: "Dgo_Ciudad_Durango421.webp"
        },
        {
          name:"Sol y playa", 
          dir: "/experiencias/sol-y-playa",
          image: "Qroo_cancun_playa108.webp"
        },
        {
          name:"Aventura", 
          dir: "/experiencias/aventura",
          image: "SIN_guanacoa_257.webp"
        },
        {
          name:"Bienestar", 
          dir: "/experiencias/bienestar",
          image: "MOR_Tepoztlan_HotelDosPiedras_LGBT-33.webp"
        },
        {
          name:"Sostenible", 
          dir: "/experiencias/sostenible",
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

  /*const listLanguages = [
    { name:"Español", 
      value: "ES"
    },
    { name:"English", 
      value: "EN"
    }
  ];*/

  const changeLenguage= event =>{
    idioma.setLenguage(event.target.value);
  }

  /*const listMenuSecondary = () => (
    listSecondary?.map(item => (
      <li className="header-menu-li-secondary">
        <Link to="/calendario">
          <FormattedMessage id="calendar"  defaultMessage="Calendario"/>
        </Link>
        <Link to="/videos">
          <FormattedMessage id="videos"  defaultMessage="Videos"/>
        </Link>
        <Link to="/descargas">
          <FormattedMessage id="downloads"  defaultMessage="downloads"/>
        </Link>
      </li>
    ))
  );*/

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

  /*const languages = () => (
    listLanguages?.map(item => (
      <option value={item.value} key={item.name}>{item.name}</option>
    ))
  );*/

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
              <li className="header-menu-li-secondary">
                <Link to="/calendario">
                  <FormattedMessage id="header.calendar"  defaultMessage="Calendrio test"/>
              </Link>
             </li>
             <li className="header-menu-li-secondary">
                <Link to="/videos">
                    <FormattedMessage id="header.videos"  defaultMessage="Videos test"/>
                </Link>
              </li>
              <li className="header-menu-li-secondary">
                <Link to="/descargas">
                    <FormattedMessage id="header.downloads"  defaultMessage="downloads test"/>
                </Link>
            </li>
            <select className="header-menu-select" onChange={changeLenguage}>
            <option  key="de" value="de">Aleman</option>
            <option  key="cn" value="cn">Chino</option>
              <option  key="sp" value="sp">Español</option>
              <option  key="fr" value="fr">Frances</option>
              <option  key="en" value="en">Ingles</option>
              <option  key="it" value="it">Italiano</option>
              <option  key="jp" value="jp">Japones</option>
              <option  key="pt" value="pt">Portugues</option>
              
            </select>
          </ul>
        </div>
        <div className="header-ctn-menu-ul-primary">
          <ul className="header-menu-ul-primary">
            <li className="header-menu-li-primary" >
      <Link to="/tren-maya">
          <FormattedMessage id="header.train.maya"  defaultMessage="Tren Maya"/>
      </Link>
  </li>
  <li className="header-menu-li-primary" >
      <Link to="/destinos/Puebla">
          <FormattedMessage id="header.destiny"  defaultMessage="Destinos"/>
      </Link>
  </li>
  <li className="header-menu-li-primary" >
      <Link to="/pueblos-magicos">
          <FormattedMessage id="header.magic.downtowns"  defaultMessage="Pueblos Magicos"/>
      </Link>
  </li>
  <li className="header-menu-li-primary" >
      <Link to="/eventos-internacionales">
          <FormattedMessage id="header.international.events"  defaultMessage="Eventos Internacionales"/>
      </Link>
  </li>
  <li className="header-menu-li-primary" >
    <Link to="/experiencias">
        <FormattedMessage id="header.experiences"  defaultMessage="Experiencias"/>
    </Link>
      <div className="header-ctn-submenu-primary">
            <div className="header-ctn-submenu-link-primary">
              <Link to="/experiencias/bodas" className="header-submenu-link-primary">
                  <FormattedMessage id="header.brides"  defaultMessage="Bodas"/>
                </Link>
                  <LazyLoadImage
                    src={require(`../../assets/img/header/Pareja-Queretaro-3.webp`)}
                    alt='logo visitmexico'
                    className="header-submenu-link-img-primary"
                  />
            </div>
            <div className="header-ctn-submenu-link-primary">
              <Link to="/experiencias/rutas-gastronomicas" className="header-submenu-link-primary">
                <FormattedMessage id="header.food"  defaultMessage="Gastronomía"/>
              </Link>
                <LazyLoadImage
                  src={require(`../../assets/img/header/Dgo_Ciudad_Durango421.webp`)}
                  alt='logo visitmexico'
                  className="header-submenu-link-img-primary"/>
            </div>
            <div className="header-ctn-submenu-link-primary">
              <Link to="/experiencias/sol-playa" className="header-submenu-link-primary">
                  <FormattedMessage id="header.sun.beach"  defaultMessage="Sol y playa"/>
                </Link>
                  <LazyLoadImage
                    src={require(`../../assets/img/header/Qroo_cancun_playa108.webp`)}
                    alt='logo visitmexico'
                    className="header-submenu-link-img-primary"/>
             </div>
             <div className="header-ctn-submenu-link-primary">
              <Link to="/experiencias/aventura" className="header-submenu-link-primary">
                  <FormattedMessage id="header.adventure"  defaultMessage="Aventura"/>
                </Link>
                  <LazyLoadImage
                    src={require(`../../assets/img/header/SIN_guanacoa_257.webp`)}
                    alt='logo visitmexico'
                    className="header-submenu-link-img-primary"/>
              </div>
              <div className="header-ctn-submenu-link-primary">
                <Link to="/experiencias/bienestar" className="header-submenu-link-primary">
                    <FormattedMessage id="header.welfare"  defaultMessage="Bienestar"/>
                  </Link>
                    <LazyLoadImage
                      src={require(`../../assets/img/header/MOR_Tepoztlan_HotelDosPiedras_LGBT-33.webp`)}
                      alt='logo visitmexico'
                      className="header-submenu-link-img-primary"/>
              </div>
              <div className="header-ctn-submenu-link-primary">
              <Link to="/experiencias/sostenible" className="header-submenu-link-primary">
                  <FormattedMessage id="header.sustainable"  defaultMessage="Sostenible"/>
                </Link>
                  <LazyLoadImage
                    src={require(`../../assets/img/header/BCS_tiburonballena.webp`)}
                    alt='logo visitmexico'
                    className="header-submenu-link-img-primary"/>
          </div>
      </div>
      
 </li>
  <li className="header-menu-li-primary" >
      <Link to="/blog">
          <FormattedMessage id="header.blog"  defaultMessage="Blog"/>
      </Link>
  </li>
  <li className="header-menu-li-primary" >
      <Link to="/guias-turisticas">
          <FormattedMessage id="header.tourist.guides"  defaultMessage="Guías Turísticas"/>
      </Link>
  </li>
          </ul>
        </div>
      </nav>
    </div>
   
  );
};

export default Header;