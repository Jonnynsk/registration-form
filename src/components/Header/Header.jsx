import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

import logo from '../../assets/Group.svg'


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.navbar}>
                <Link to='/'><img src={logo} alt='logo' /></Link>
                <span>Электронный бланк ПТД</span>
                <span>Памятка путешественника</span>
                <span>Информация</span>
                <span>Вопросы и поддержка</span>
                <span>Личный кабинет</span>
            </div>
        </header>
    );
};

export default Header;