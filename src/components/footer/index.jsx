import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Logo from '../../assets/img/header/logo.png';
import './styles.css';

const Footer = () => {
  const listFooter = {
    description: "",
    followUs: "Síguenos en:",
    linksFast: {
      name: "Links Rápidos",
      links: [
        {
          name: "Tren Maya",
          dir: "/"
        },
        {
          name: "Estados",
          dir: "/"
        },
        {
          name: "Pueblos Mágicos",
          dir: "/"
        },
        {
          name: "Eventos Internacionales",
          dir: "/"
        },
        {
          name: "Experiencias",
          dir: "/"
        }
      ]
    },
    linksKnow: {
      name: "Conoce más",
      links: [
        {
          name: "Videos",
          dir: "/"
        },
        {
          name: "Guías Tusísticas",
          dir: "/"
        },
        {
          name: "Materiales de descarga",
          dir: "/"
        },
        {
          name: "Calendario",
          dir: "/"
        }
      ]
    },
    linksContact: {
      name: "Contáctanos",
      links: [
        {
          name: "Teléfonos:",
          dir: "/"
        },
        {
          name: "(01) 800 9797 8585",
          dir: "/"
        },
        {
          name: "(01) 800 9797 8585",
          dir: "/"
        },
        {
          name: "Correo:",
          dir: "/"
        },
        {
          name: "contacto@sectur.com.mx",
          dir: "/"
        }
      ]
    }
  };

  const linksFast = () => (
    listFooter?.linksFast?.links?.map(item => (
      <li key={item?.name}>
        <Link to={item?.dir} className="footer-contact-section-text">{item?.name}</Link>
      </li>
    ))
  );

  const linksKnow = () => (
    listFooter?.linksKnow?.links?.map(item => (
      <li key={item?.name}>
        <Link to={item?.dir} className="footer-contact-section-text">{item?.name}</Link>
      </li>
    ))
  );

  const linksContact = () => (
    listFooter?.linksContact?.links?.map(item => (
      <li key={item?.name}>
        <Link to={item?.dir} className="footer-contact-section-text">{item?.name}</Link>
      </li>
    ))
  );

  return (
    <div className="footer-ctn">
      <div className="footer-ctn-contact">
        <div className="footer-ctn-contact-section">
          <LazyLoadImage 
            src={Logo}
            alt='visitmexico'
            className="footer-contact-logo"
          />
          <p className="footer-contact-section-text">{listFooter?.description}</p>
          <div>
            <p className="footer-contact-section-title">{listFooter?.followUs}</p>
          </div>
        </div>
        <div className="footer-ctn-contact-section">
          <p className="footer-contact-section-title">{listFooter?.linksFast?.name}</p>
          <ul className="footer-contact-section-ul">
            {linksFast()}
          </ul>
        </div>
        <div className="footer-ctn-contact-section">
          <p className="footer-contact-section-title">{listFooter?.linksKnow?.name}</p>
          <ul className="footer-contact-section-ul">
            {linksKnow()}
          </ul>
        </div>
        <div className="footer-ctn-contact-section">
          <p className="footer-contact-section-title">{listFooter?.linksContact?.name}</p>
          <ul className="footer-contact-section-ul">
            {linksContact()}
          </ul>
        </div>
      </div>
      <div className="footer-ctn-contact-legal">
        <div className="footer-ctn-contact-legal-links">
          <Link className="footer-contact-legal-link" to="/">
            Condiciones generales | 
          </Link>
          <Link className="footer-contact-legal-link" to="/">
            Aviso legal | 
          </Link>
          <Link className="footer-contact-legal-link" to="/">
            Política de Privacidad | 
          </Link>
          <Link className="footer-contact-legal-link" to="/">
            Cookies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;