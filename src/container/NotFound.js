import React from 'react';
import { Result } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import Boton from '../components/boton/Boton';
import { useHistory }from 'react-router-dom';
import { ArrowLeftOutlined }from '@ant-design/icons';

const NotFound = () => {

    const history = useHistory();

    const backHome = () =>{
        history.push('/');
    }
    return (
        <Container>
            <Result
                status='404'
                title='404'
                subTitle='Oooops!, la pagina no se encuentra disponible.'
                extra={ 
                    <Boton 
                        name='Regresar' 
                        type='button' 
                        estilo='danger' 
                        evento='onClick' 
                        accion={ backHome } 
                        icon={ <ArrowLeftOutlined /> }
                    /> 
                }
            />
        </Container>
    )
}

const Container = styled.div`
    background: #000000;
    height: 100vh;
    .ant-result-title{
        color: #dc3545;
        font-size: 75px;
        font-weight: 700;
    }

    .ant-result-subtitle{
        color: #dc3545;
        font-size: 45px;
        font-weight: 600; 
    }
`;

export default NotFound
