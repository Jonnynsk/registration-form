import React from 'react';

import styles from './Registration.module.scss'

import eclipse from '../../assets/Ellipse 24.svg'

const Registration = () => {
    return (
        <div className={styles.registration}>
            <div className={styles.form}>
                <img src={eclipse} />
                <h1>Без регистрации</h1>
                <p>Введите адрес электронной почты</p>
                <input type='text' placeholder='Введите email' />
                <div className={styles.continue}>
                    Продолжить
                </div>
                <p className={styles.gos}>Вход через Госуслуги</p>
            </div>
        </div>
    );
};

export default Registration;