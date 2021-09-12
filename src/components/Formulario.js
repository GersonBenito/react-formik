import React from 'react';
import { Formik }from 'formik';
import styled from 'styled-components';

const Formulario = () => {

    //PRIMER FORMULARIO

    return (
        <Container>
            <h1>uso de formik</h1>
            <Formik
                initialValues={{
                    username:'',
                    email:''
                }}

                validate={ values =>{
                    const errors = {};
                    if(!values.email){
                        errors.email = 'Required';
                    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                        errors.email = 'correo no valido'
                    }

                    return errors;
                }}

                onSubmit={(values, { setSubmitting }) =>{
                    setTimeout( ()=>{
                        console.log('datos del formulario', values);
                        setSubmitting(false);
                    },400 )
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) =>(
                    <form onSubmit={ handleSubmit } >
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder='username' name='username'
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    
                                />
                                { errors.username && touched.username && errors.username }
                            </div>
                            <div className="col">
                                <input type="email" className="form-control" placeholder="email" name='email'
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    
                                />
                                {errors.email && touched.email && errors.email }
                            </div>
                        </div>
                        <button type='submit' className='btn btn-info mt-3'  disabled={ isSubmitting }>Enviar</button>
                    </form>

                )}
            </Formik>
        </Container>
    )
}

const Container = styled.div`
    padding: 10px;
`;

export default Formulario
