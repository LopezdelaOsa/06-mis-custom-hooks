import { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [estado, setEstado] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const hacerFetch = async() => {

        setEstado({
            ...estado,
            isLoading: true
        })

        const respuesta = await fetch (url)
        const data = await respuesta.json()

        //console.log(data)
        setEstado({
            data: data,
            isLoading: false,
            hasError: null,
            })
    }

    useEffect(() => {
        hacerFetch()
      
      }
    
    , [url])
    
  return {
    data: estado.data,
    isLoading: estado.isLoading,
    hasError: estado.hasError
    }
}
