import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Boton from '../boton/Boton';
import { useHistory } from 'react-router';
import { Space }from 'antd';
import 'antd/dist/antd.css';
import { RedoOutlined, SaveOutlined }from '@ant-design/icons';

const FormularioFormik = () => {

    const history = useHistory();
    
    const initialValues = {
        username: '',
        email: '',
        pais: '',
        direccion: '',
    }

    //regresar al home
    const gotoHome = () =>{
        history.push('/');
    }

    //enviar datos
    const sendForm = (values, resetForm) =>{
        console.log('formulario enviado',values);
        resetForm();
    }

    //validaciones del formulario
    const validator = ({ username, email, pais, genero, direccion }) =>{

        let errores = {};

        //validar nombre de usuario
        if(!username){

            errores.username = 'Campo nombre es requerido';

        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(username)){

            errores.username = 'El nombre solo puede contener letras y espacios';
        }

        //validar correo
        if(!email){

            errores.email = 'Campo email es requerido';

        }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)){

            errores.email = 'Email ingresa es incorrecto';

        }

        //validar pais
        if(!pais){
            errores.pais = 'Campo pais es requerido';
        }

        //validar direccion 
        if(!direccion){
            errores.direccion = 'Campo direccion es requerido';
        }

        return errores;
    }

    return (
        <Container>
            <div className="titulo">
                <p className='text-info' >Formulario con Formik</p>
            </div>
            <div className="contenedorForm">

                <Formik
                    initialValues={ initialValues }
                    validate={ validator }
                    onSubmit={ (values, { resetForm }) =>sendForm(values, resetForm) }
                >
                    {
                        ({ errors }) =>(

                            <Form>
                                <div className="contenedor">

                                    <div>
                                        <label>Nombre de usuario</label>
                                        <Field 
                                            type='text'
                                            name='username'
                                            className='form-control'
                                        />
                                        <ErrorMessage
                                            name='username'
                                            component={()=>(<p className='text-danger'>{errors.username}</p>)}
                                        />
                                    </div>

                                    <div>
                                        <label>Correo</label>
                                        <Field 
                                            type='text'
                                            name='email'
                                            className='form-control'
                                        />
                                        <ErrorMessage 
                                            name='email' 
                                            component={()=>(<p className='text-danger'>{errors.email}</p>)}
                                        />
                                    </div>

                                    <div>
                                        <label>Pais</label>
                                        <Field name='pais' as='select' className='form-control' >
                                            <option value="El Salvador">El Salvador</option>
                                            <option value="Estados Unidos">Estados Unidos</option>
                                            <option value="Mexico">Mexico</option>
                                        </Field>
                                        <ErrorMessage 
                                            name='pais'
                                            component={()=>( <p className='text-danger' >{errors.pais}</p> )}
                                        />
                                    </div>

                                    <div>

                                        <label>Direccion</label>
                                        <Field name='direccion' as='textarea' className='form-control' />
                                        <ErrorMessage 
                                            name='direccion'
                                            component={()=>( <p className='text-danger'>{errors.direccion}</p> )}
                                        />

                                    </div>
                                </div>


                                <div className="boton mt-3">
                                    <Space>
                                        <Boton 
                                            name='Regresar' 
                                            type='button' 
                                            estilo='outline-warning' 
                                            evento='onClick' 
                                            accion={ gotoHome }
                                            icon={ <RedoOutlined /> } 
                                        />
                                        <Boton 
                                            name='Enviar' 
                                            type='submit' 
                                            estilo='outline-info' 
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
    .titulo{
        text-align: center;
    }
    .titulo > p{
        margin: 0;
        font-family: fantasy;
        font-size: 35px;
    }

    .boton{
        display: flex;
        justify-content: center;
    }

    .contenedor{
        display: grid;
        grid-template-columns: repeat(auto-fit, 30rem);
        justify-content: center;
        grid-gap: 10px;
    }

    @media screen and (max-width: 768px) and (orientation: portrait){
        .contenedor{
            grid-template-columns: repeat(auto-fit, 18rem);
        }
    }
`;

export default FormularioFormik
