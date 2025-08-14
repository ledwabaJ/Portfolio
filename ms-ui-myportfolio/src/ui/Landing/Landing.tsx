import React, {
  useEffect,
  useState
}  from 'react';

import Hero from './components/Hero';

// import Header from '../../components/header/Header';

import { ThemeNames } from '@common/constants';

export const Landing = (activeTheme) => {
  
  // const [activeTheme, setTheme ] = useState(ThemeNames.purpleCandy);

  // const toggleTheme = () => {

  //   const value = activeTheme === ThemeNames.yellowSunflower ? ThemeNames.purpleCandy : ThemeNames.yellowSunflower;
  //   setTheme(value);
  // }

  return (
    <div>
      {/* <Header activeTheme={ activeTheme } onClick={ toggleTheme }/> */}
      <Hero activeTheme={ activeTheme }/>
    </div>
  );  
};