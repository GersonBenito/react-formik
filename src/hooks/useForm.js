import { useState } from 'react'

/**
 * @param {*} initialState valor inicial del formulario, campos del formulario
 */
export const useForm = ({inialState}) => {

    const [ formulario, setFormulario ] = useState(inialState);

    const handleChage = ({ target }) =>{

        const { name, value } = target;
        
        setFormulario({
            ...formulario,
            [ name ]:value
        })
    }

    return {
        formulario,
        handleChage
    }
}
