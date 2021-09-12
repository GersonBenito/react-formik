import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';  
import { validateSitioWeb } from '../../helper/Validaciones';
import Boton from '../boton/Boton';
import { useHistory } from 'react-router';
import { Space }from 'antd';
import 'antd/dist/antd.css';
import { RedoOutlined, SaveOutlined }from '@ant-design/icons';



const FormularioYup = () => {

    const history = useHistory();
    //simulacion de datos dinamicos, cuando sean datos de una base no sera necesarios estos datos
    const dataEdit = {
        nombres:'Gerson',
        apellidos: 'Benito',
        email: 'gersonbenito4@gmail.com',
        edad: 22,
        sitioWeb: 'www.sitio.com',
        password: 'qwert',
        confirmarPassword: 'qwert',
    }

    const initialValues = {
        nombres:'',
        apellidos: '',
        email: '',
        edad: '',
        sitioWeb: '',
        password: '',
        confirmarPassword: '',
    }

    //cambiar cuando sean datos reales y dinamicos de una base de datos
    const accion = 'add';

    const validator = yup.object().shape({
        nombres: yup.string().required('Campo nombres es requido'),
        apellidos: yup.string().required('Campo apellidos es requerido'),
        email: yup.string().email('Correo ingresado no es valido').required('Campo email es requerido'),
        edad: yup.number().required('Campo edad es requerido').integer('La edad debe de ser un numero entero').positive('La edad debe de tener un numero positivo'),
        sitioWeb: yup.string(),
        password: yup.string()
                    .min(4,'4 caracteres minimo')
                    .max(8,'8 caracteres maximo')
                    .required('Campo contraseña es requrido'),
        confirmarPassword: yup.string().oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden'),
    })



    const handleSubmit = (values, resetForm) =>{
        console.log(values);
        resetForm();
    }


    const goToHome = () =>{
        history.push('/');
    }

    return (
        <Container>

            <div className="titulo">
                <p className='text-info'>Formulario con Formik y Yup</p>
            </div>

            <div className="contenedorForm">

                <Formik
                    initialValues={accion === 'edit' ? dataEdit : initialValues}
                    validationSchema={validator}
                    onSubmit={(values, { resetForm })=>handleSubmit(values, resetForm)}
                >
                    {
                        ({ errors, touched }) =>(

                            <Form>
                                <div className="contenedor">
                                    <div className="nombres">

                                        <label>Nombres</label>
                                        <Field className='form-control' name='nombres' type='text' />
                                        {
                                            errors.nombres && touched.nombres && (<p className='text-danger' >{errors.nombres}</p>)
                                        }

                                    </div>
                                    <div className="apellidos">

                                        <label>Apellidos</label>
                                        <Field className='form-control' name='apellidos' type='text' />
                                        {
                                            errors.apellidos && touched.apellidos && (<p className='text-danger'>{errors.apellidos}</p>)
                                        }

                                    </div>
                                    <div className="email">

                                        <label>Eamil</label>
                                        <Field className='form-control' name='email' type='text' />
                                        {
                                            errors.email && touched.email && (<p className='text-danger'>{errors.email}</p>)
                                        }

                                    </div>
                                    <div className="edad">

                                        <label>Edad</label>
                                        <Field className='form-control' name='edad' type='number' />
                                        {
                                            errors.edad && touched.edad && (<p className='text-danger'>{errors.edad}</p>)
                                        }

                                    </div>

                                    <div className="sitioWeb">

                                        <label>Sitio web</label>
                                        <Field className='form-control' name='sitioWeb' type='text' validate={validateSitioWeb} />
                                        {
                                            errors.sitioWeb && touched.sitioWeb && (<p className='text-danger'>{errors.sitioWeb}</p>)
                                        }

                                    </div>
                                    <div className="password">

                                        <label>Contraseña</label>
                                        <Field className='form-control' name='password' type='password' />
                                        {
                                            errors.password && touched.password && (<p className='text-danger'>{errors.password}</p>)
                                        }

                                    </div>
                                    <div className="confirm">

                                        <label>Confirmar contraseña</label>
                                        <Field className='form-control' name='confirmarPassword' type='password' />
                                        {
                                            errors.confirmarPassword && touched.confirmarPassword && (<p className='text-danger'>{errors.confirmarPassword}</p>)
                                        }

                                    </div>
                                </div>
                                <div className="boton mt-3">
                                    <Space>
                                        <Boton 
                                            name='Volver' 
                                            type='button'
                                            estilo='warning' 
                                            evento='onClick' 
                                            accion={goToHome}
                                            icon={ <RedoOutlined /> } 
                                        />
                                        <Boton 
                                            name='enviar' 
                                            type='Submit'
                                            estilo='info' 
                                            icon={ <SaveOutlined /> } 
                                        />
                                    </Space>   
                                </div>
                            </Form>
                        )
                    }

                </Formik>

            </div>
        </Container>
    )
}

const Container = styled.div`
    .contenedor{
        display: grid;
        grid-template-columns: repeat(auto-fit, 20rem);
        grid-gap: 10px;
        justify-content: center;
    }

    .boton{
        display: flex;
        justify-content: center;
    }

    .titulo{
        text-align: center;
    }
    .titulo > p{
        margin: 0;
        font-family: fantasy;
        font-size: 35px;
    }
`;

export default FormularioYup
