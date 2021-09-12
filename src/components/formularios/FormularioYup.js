import React from 'react';
import styled from 'styled-components';
import { RedoOutlined }from '@ant-design/icons';
import { useHistory } from 'react-router';
import Boton from '../boton/Boton';


const FormularioYup = () => {

    const history = useHistory();

    const goToHome = () =>{
        history.push('/');
    }

    return (
        <Container>
            <div className="titulo">
                <p className='text-info'>Formulario yup, en construccion</p>
            </div>
            <div className="boton mt-3">
                <Boton 
                    name='Volver' 
                    type='button'
                    estilo='warning' 
                    evento='onClick' 
                    accion={goToHome}
                    icon={ <RedoOutlined /> } 
                />
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
`;

export default FormularioYup
