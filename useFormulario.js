import { useState } from "react"

export const useFormulario = ( formularioInicial = { }) => {

    const [estadoFormulario, setEstadoFormulario] = useState( formularioInicial )

    const alCambiar = ({target}) => {
        //console.log(event.target.value)
        const {name, value} = target
        setEstadoFormulario({
            ...estadoFormulario,
            [name]: value
        })
    }

    const onReseteoFormulario = () => {
        setEstadoFormulario ( formularioInicial )

    }


    return {
        ...estadoFormulario,
        estadoFormulario,
        alCambiar,
        onReseteoFormulario

    }
    
}
