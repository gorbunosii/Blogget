import React from 'react';
import style from './Logo.module.css';

import {ReactComponent as LogoIcon} from './img/logo.svg';

export const Logo = props => {
  return (
    <a className={style.link} href='/'>
      <LogoIcon width={50} height={50}/>
    </a>
  );
};
