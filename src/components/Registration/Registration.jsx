import React from 'react'
import { useHistory } from 'react-router';
import { useFormik } from 'formik'
import * as Yup from 'yup';

import eclipse from '../../assets/Ellipse 24.svg'

import styles from './Registration.module.scss'


const Registration = () => {

    const history = useHistory()

    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Некорректный email').required('Обязательное поле')
        }),
        onSubmit: (values) => {
            console.log(`Email: ${values.email}`)
            history.push('/confirmation')
        }
    })

    return (
        <div className={styles.registration}>
            <div className={styles.form}>
                <img src={eclipse} alt='eclipse' />
                <h1>Без регистрации</h1>
                <p>Введите адрес электронной почты</p>

                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Введите email'
                        name='email'
                        id='email'
                        autoFocus
                    />
                    {touched.email && errors.email ? (
                        <div>{errors.email}</div>
                    ) : null}
                    <button className={styles.continue} type="submit">Продолжить</button>
                </form>
                
                <p className={styles.gos}>Вход через Госуслуги</p>
            </div>
        </div >
    )
}

export default Registration