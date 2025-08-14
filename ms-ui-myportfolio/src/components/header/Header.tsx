import React, {
  useEffect,
  useState
}  from 'react';

import styles from './Header.module.scss';

import {
  ToggleButtonYellow,
  ToggleButtonPurple
 } from '@icons';

import {
  Menu,
  ThemeNames
} from '@common';

import {
  List
} from '@components'

type headerProps = {
  activeTheme: string,
  onClick: () => void
}

export const Header: React.FC<headerProps> = ({ activeTheme, onClick }) => {

  return (
    <header className={styles.header}>
      
      <div className={ styles.themeContainer } onClick={ onClick }>
        { activeTheme === ThemeNames.yellowSunflower ? <ToggleButtonYellow /> : <ToggleButtonPurple />}
        Theme
      </div>
      
      <List items={ activeTheme === ThemeNames.yellowSunflower ? Menu.Light : Menu.Dark } />
    </header>
  );
};
