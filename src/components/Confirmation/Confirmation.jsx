import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useHistory } from 'react-router';

import styles from './Confirmation.module.scss'

import eclipse from '../../assets/Ellipse 24.svg'


const Confirmation = () => {

    const history = useHistory()

    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            password: ''
        },
        validationSchema: Yup.object({
            password: Yup.string().matches(/1234/, 'Неверный код').required('Обязательное поле')
        }),
        onSubmit: (values) => {
            console.log(`Password: ${values.password}`)
            history.push('/success')
        }
    })

    return (
        <div className={styles.registration}>
            <div className={styles.form}>
                <img src={eclipse} alt='eclipse' />
                <h1>Подтверждение</h1>
                <p>На Ваш электронный адрес был выслан код,
                    введите его ниже</p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor='password'></label>
                    <input 
                        type='text'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name='password'
                        id='password'
                    />
                    {touched.password && errors.password ? (
                        <div>{errors.password}</div>
                    ) : null}
                    <button className={styles.continue} type='submit'>Продолжить</button>
                </form>
                <p className={styles.gos}>Выслать код повторно</p>
            </div>
        </div>
    )
}

export default Confirmation