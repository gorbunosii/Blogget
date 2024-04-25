import React from 'react';
import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Heading from './Heading';
import Search from './Search';
import Auth from './Auth';

export const Header = props => {
    return (
        <header className={style.header}>
            <Layout>
                <div className={style.gridContainer}>
                <Logo/>
                <Heading text='Главная'/>
                <Search/>
                <Auth auth='Денис' />
                </div>
            </Layout>
        </header>
    )
}