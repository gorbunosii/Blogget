import React from 'react';
import style from './NonExistent.module.css';

export const NonExistent = props => <div className={style.container}>
  <p className={style.none}>404</p>
  <p className={style.text404}>К сожелению, такой страницы не существует :(</p>
</div>;
