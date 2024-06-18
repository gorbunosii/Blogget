import React from 'react';
import style from './Homepage.module.css';

export const Homepage = props => {
    return <div className={style.container}><p>Здравствуйте, пожалуйста авторизируйтесь!</p>
    <p>Если вы уже это сделали, то можете выбрать интересующую вас категорию новостей!</p></div>
}