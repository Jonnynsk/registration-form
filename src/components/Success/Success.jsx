import React from 'react'
import { Link } from 'react-router-dom'

import done from '../../assets/Vector.svg'

import styles from './Success.module.scss'


const Success = () => {
    return (
        <div className={styles.registration}>
            <div className={styles.form}>
                <img src={done} alt='done' />
                <h1>Почта подтверждена!</h1>
                <p>На Ваш электронный адрес выслан бланк пассажирской таможенной декларации и штрих-код для
                    доступа к быстрой печати с сенсорного терминала</p>
                <Link to='/'>
                    <div className={styles.return}>
                        Вернуться
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Success