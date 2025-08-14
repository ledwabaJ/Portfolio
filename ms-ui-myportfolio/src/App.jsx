import React, {
  useEffect,
  useState
}  from 'react';

import './App.css';

import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';

import {
  Header
} from '@components'

import {
  Landing
} from '@ui';

import {
  ThemeNames
} from '@common';

function App() {

  const [activeTheme, setTheme ] = useState(ThemeNames.purpleCandy);

  const toggleTheme = () => {

    const value = activeTheme === ThemeNames.yellowSunflower ? ThemeNames.purpleCandy : ThemeNames.yellowSunflower;
    setTheme(value);
  }

  return (
    <div data-theme={ activeTheme }>
    <Header activeTheme={ activeTheme } onClick={ toggleTheme }/>
    <Router>
      <Routes>
       <Route path={ '/' } element={<Landing activeTheme={ activeTheme }/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;