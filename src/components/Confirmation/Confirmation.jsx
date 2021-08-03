import React from 'react';

import styles from './Confirmation.module.scss'

import eclipse from '../../assets/Ellipse 24.svg'

const Confirmation = () => {
    return (
        <div className={styles.registration}>
            <div className={styles.form}>
                <img src={eclipse} />
                <h1>Подтверждение</h1>
                <p>На Ваш электронный адрес был выслан код,
                     введите его ниже</p>
                
                <div className={styles.continue}>
                    Продолжить
                </div>
                <p className={styles.gos}>Выслать код повторно</p>
            </div>
        </div>
    );
};

export default Confirmation;