import React from 'react';
import style from './Auth.module.css';

import {ReactComponent as LoginIcon} from './img/login.svg';

export const Auth = ({auth}) => {
  return (
    <button className={style.button}>
      {auth ? auth : <LoginIcon width={40} height={40}/>}
    </button>
  );
};
