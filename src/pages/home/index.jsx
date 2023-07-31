import React, { useState, useEffect } from 'react';
import HomeLoading from '../../components/homeLoading';
import HomeSlider from '../../components/homeSlider';
import HomeFinder from '../../components/homeFinder';
import HomeKnow from '../../components/homeKnow';
import HomeTheMostViewed from '../../components/homeTheMostViewed';
import HomeSunBeachAndSand from '../../components/homeSunBeachAndSand';
import HomeTravelInspiration from '../../components/homeTravelInspiration';
import HomeSliderVideoCards from '../../components/homeSliderVideoCards';
import HomeExperience360 from '../../components/homeExperience360';
import HomeRecentArticles from '../../components/homeRecentArticles';
import HomeSuscribe from '../../components/homeSuscribe';

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 3000);
  }, []);
  return (
    <>
    {loading ?
      <>
        <HomeSlider />
        <HomeFinder />
        <HomeKnow />
        <HomeTheMostViewed />
        <HomeSunBeachAndSand />
        <HomeTravelInspiration />
        <HomeSliderVideoCards />
        <HomeExperience360 />
        <HomeRecentArticles />
        <HomeSuscribe />
      </>
      :
      <>
        <HomeLoading />
      </>
    }
    </>
  );
};

export default Home;