import React from 'react'
import styled from 'styled-components'

/**
 * @param {*} name nombre del boton
 * @param {*} type tipo del boton submit o button
 * @param {*} estilo color que tendra el boton success, warning, danger, etc
 * @param {*} icon icono representativo del boton
 * @param {*} evento tipo de evento que tendra, ejemplo onClick, onChange, etc
 * @param {*} accion funcion que realizara en el evento
 */
const Boton = ({name, type, estilo, icon, accion, evento}) => {

    switch (evento) {

        case 'onClick':
            
            return (<Container><button type={type} className={`btn btn-${estilo}`} onClick={accion} >{icon}&nbsp;{name}</button></Container>);

        case 'onChange':

            return (<Container><button type={type} className={`btn btn-${estilo}`} onClick={accion} >{icon}&nbsp;{name}</button></Container>);
    
        default:

            return (<Container><button type={type} className={`btn btn-${estilo}`} onClick={accion} >{icon}&nbsp;{name}</button></Container>);
    }
}

const Container = styled.div`
    .anticon svg{
        display: flex;
    }
`;

export default Boton
