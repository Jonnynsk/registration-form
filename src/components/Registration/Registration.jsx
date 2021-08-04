import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

import styles from './Registration.module.scss'

import eclipse from '../../assets/Ellipse 24.svg'



const Registration = () => {

    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().min(12, 'Email должен быть больше 12 символов').required('Обязательное поле')
        }),
        onSubmit: (values) => {
            console.log(`Email: ${values.email}`)
        }
    })

    return (
        <div className={styles.registration}>
            <div className={styles.form}>
                <img src={eclipse} />
                <h1>Без регистрации</h1>
                <p>Введите адрес электронной почты</p>

                    <form onSubmit={handleSubmit}>
                        <lable htmlFor='email'></lable>
                        <input 
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Введите email' 
                        name='email'
                        type='text'
                        id='email'
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