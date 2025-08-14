import React from 'react';
import styles from './hero.module.scss';

type heroProps = {
  activeTheme: string
}

const Hero: React.FC<heroProps> = ({ activeTheme }) => {
  return (    
    <section className={styles.hero}>
      
      <div className={styles.overlay}>

        <div className={styles.content}>
          
          <>
            <span>Hi, I'm Josephine Ledwaba</span>
            <h1>Software engineer</h1>
          </>
        </div>
      </div>
    </section>
  );
};

export default Hero;
