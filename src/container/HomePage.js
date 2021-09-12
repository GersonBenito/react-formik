import React, { useState } from 'react'
import styled from 'styled-components'
import { Image }from 'antd';
import 'antd/dist/antd.css';
import Boton from '../components/boton/Boton';
import { useHistory } from 'react-router-dom';
import { FileSearchOutlined }from '@ant-design/icons';

const HomePage = () => {

    const [ formulario, setFormulario ] = useState(
        [
            {
                name: 'Formulario Formik',
                description:  'Formik es una librería declarativa, intuitiva y adaptable desarrollada por Jared Palmer. Es muy fácil de utilizar y, gracias a su reducido peso (tan solo 12.7 kB), es perfecta para nuestras aplicaciones. Gracias a ella, al desarrollar nuestros formularios, conseguiremos:Obtener los valores dentro y fuera del State del formulario.Validación y mensajes de error. Controlar el envío.',
                image: 'https://miro.medium.com/max/1400/1*c1V37mc6XxLectWfolqwoA.png',
                ruta: '/formik'
            },
            {
                name: 'Formulario Yup',
                description:  'Yup es la librería perfecta para validar los campos de Formik, y es tanto así que el equipo de Formik adora Yup que creo un accesorio o props especifico para Yup llamado validationSchema que transforma los errores en objetos y coincide con sus valores y funciones tocadas. Un esquema de Yup es un objeto inmutable responsable de validar un objeto.',
                image: 'https://thumbs.dreamstime.com/b/print-145848581.jpg',
                ruta: '/yup'
            },
    
        ]
    );

    const history = useHistory();

    const goToForm = (ruta) =>{
        history.push(ruta);
    }

    return (
        <Container>

            <div className="titulo">
                <p className='text-info'>Uso de formik</p>
            </div>

            <div className="contenedorCard">

                {
                    formulario && formulario.map((item, index) =>(

                        <div className="card" key={index} >
                            <Image src={ item.image } className='card-img-top' alt='imagen' />
                            <div className="card-body">
                                <h5 className="card-title">{ item.name }</h5>
                                <p className="card-text">{ item.description }</p>
                            </div>
                            <Boton 
                                name='Ver formulario' 
                                type='button' 
                                estilo='info btn-block' 
                                evento='onClick' 
                                accion={() => goToForm(item.ruta)} 
                                icon={ <FileSearchOutlined /> }
                            />
                        </div>

                    ))
                }

            </div>

        </Container>
    )
}

const Container = styled.div`
    padding: 5px;
    .titulo{
        text-align: center;
    }
    .titulo > p{
        margin: 0;
        font-family: fantasy;
        font-size: 35px;
    }

    .contenedorCard{
        display: grid;
        grid-template-columns: repeat(auto-fit,18rem);
        grid-gap: 10px;
        justify-content: center;
    }
`;

export default HomePage
