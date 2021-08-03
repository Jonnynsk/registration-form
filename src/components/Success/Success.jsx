import React from 'react';

import styles from './Success.module.scss'

import done from '../../assets/Vector.svg'

const Success = () => {
    return (
        <div className={styles.registration}>
            <div className={styles.form}>
                <img src={done} />
                <h1>Почта подтверждена!</h1>
                <p>На Ваш электронный адрес выслан бланк пассажирской таможенной декларации и штрих-код для 
                    доступа к быстрой печати с сенсорного терминала</p>
                <div className={styles.return}>
                    Вернуться
                </div>
            </div>
        </div>
    );
};

export default Success;