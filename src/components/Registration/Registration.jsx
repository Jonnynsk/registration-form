import React from 'react'
import { Link } from 'react-router-dom'

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
                <Link to='/confirmation'>
                    <div className={styles.continue}>
                        Продолжить
                    </div>
                </Link>
                <p className={styles.gos}>Вход через Госуслуги</p>
            </div>
        </div>
    )
}

export default Registration