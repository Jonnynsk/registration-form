import React, { useRef, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useHistory } from 'react-router';

import styles from './Confirmation.module.scss'

import eclipse from '../../assets/Ellipse 24.svg'
import { useEffect } from 'react';

const Confirmation = () => {

    const history = useHistory()

    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            password: '',
            password1: '',
            password2: '',
            password3: ''
        },
        validationSchema: Yup.object({
            password: Yup.string().matches(/1/, 'Неверный код').required('Обязательное поле'),
            password1: Yup.string().matches(/2/, 'Неверный код').required('Обязательное поле'),
            password2: Yup.string().matches(/3/, 'Неверный код').required('Обязательное поле'),
            password3: Yup.string().matches(/4/, 'Неверный код').required('Обязательное поле')
        }),
        onSubmit: () => {
            console.log(`Password: ${code}`)
            history.push('/success')
        }
    })

    const [code, setCode] = useState('')

    const codeToConfirm = () => {
        const newCode =
            `
        ${values.password}
        ${values.password1}
        ${values.password2}
        ${values.password3}
        `
        setCode(newCode)
    }

    const firstRef = useRef(null)
    const secondRef = useRef(null)
    const thirdRef = useRef(null)
    const fourthRef = useRef(null)

    useEffect(() => {
        firstRef.current && firstRef.current.focus()
    }, [])
    useEffect(() => {
        if (values.password.length === 1) {
            secondRef.current.focus()
        }
    }, [values.password.length])

    useEffect(() => {
        firstRef.current && firstRef.current.focus()
    }, [])
    useEffect(() => {
        if (values.password1.length === 1) {
            thirdRef.current.focus()
        }
    }, [values.password1.length])

    useEffect(() => {
        firstRef.current && firstRef.current.focus()
    }, [])
    useEffect(() => {
        if (values.password2.length === 1) {
            fourthRef.current.focus()
        }
    }, [values.password2.length])


    return (
        <div className={styles.registration}>
            <div className={styles.form}>
                <img src={eclipse} alt='eclipse' />
                <h1>Подтверждение</h1>
                <p>На Ваш электронный адрес был выслан код,
                    введите его ниже</p>

                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name='password'
                        id='password'
                        maxLength='1'
                        ref={firstRef}
                    />
                    <input
                        type='text'
                        value={values.password1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name='password1'
                        id='password1'
                        maxLength='1'
                        ref={secondRef}
                    />
                    <input
                        type='text'
                        value={values.password2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name='password2'
                        id='password2'
                        maxLength='1'
                        ref={thirdRef}
                    />
                    <input
                        type='text'
                        value={values.password3}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name='password3'
                        id='password3'
                        maxLength='1'
                        ref={fourthRef}
                    />
                    {/* {touched.password && errors.password ? (
                        <div>{errors.password}</div>
                    ) : null} */}
                    <button onClick={codeToConfirm} className={styles.continue} type='submit'>Продолжить</button>
                </form>
                {code}
                <p className={styles.gos} onClick={() => alert('Код отправлен повторно')}>Выслать код повторно</p>
            </div>
        </div>
    )
}

export default Confirmation