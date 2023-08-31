import { useState } from "react"

export const useContador = ( valorInicial = 0) => {

    const [contar, setContar] = useState(valorInicial)

    const incremento = ( valor = 1) => {
        //setContar (contar + valor)
        setContar ( (current) => current + valor)
    }

    const decremento = (valor = 1) => {
        if (contar === 0 ) return
        //setContar (contar - valor)
        setContar ( (current) => current - valor)
    }

    const inicializar = () => {
        setContar (valorInicial)
    }


    return {
        contar,
        incremento,
        decremento,
        inicializar
        
    }
}