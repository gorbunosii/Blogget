import React from 'react';
import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import {Link} from 'react-router-dom';

export const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo/>
        <Link className={style.homepage} to="/">Главная</Link>
        <Search/>
        <Auth/>
      </div>
    </Layout>
  </header>
);
