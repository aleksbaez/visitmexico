import React from 'react';
import './styles.css';

const HomeFinder = () => {
  return (
    <div className="home-searcher-ctn">
      <form className="home-searcher-form-ctn">
        <label 
          htmlFor="homeSearcher"
          className="home-searcher-form-label"
        >
          Buscador:
        </label>
        <div className="home-searcher-ctn-form-input">
          <input 
            id="homeSearcher" 
            type="text" 
            name="searcherHome" 
            placeholder="Los mejores centros turísticos..."
            className="home-searcher-form-input"
          />
          <button 
            type='submit'
            className="home-searcher-form-button"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeFinder;