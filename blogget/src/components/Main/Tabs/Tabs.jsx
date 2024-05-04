import React from 'react';
import style from './Tabs.module.css';

export const Tabs = props => {
    return (
    <ul className={style.list}>
        <li><a href="#">Главня</a></li>
        <li><a href="#">Просмотренные</a></li>
        <li><a href="#">Сохраненные</a></li>
        <li><a href="#">Мои посты</a></li>
    </ul>)
}