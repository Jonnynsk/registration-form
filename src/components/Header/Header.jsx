import React from 'react'

import styles from './Header.module.scss'

import logo from '../../assets/Group.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.navbar}>
                <img src={logo} alt='logo'/>
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