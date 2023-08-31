
import { useEffect, useReducer } from 'react'
import { tudoReducer } from "./tudoReducer"

//const initialState = []

const init = () => {
    return JSON.parse( localStorage.getItem('tudos') ) || []
}

export const useTudos = () => {

    const [tudos, dispatch] = useReducer( tudoReducer, [], init)

    useEffect(() => {
        //console.log(tudos)
        localStorage.setItem('tudos', JSON.stringify( tudos ))
    
    }, [tudos])

    const handleNewTudo = (tudo) => {
        //console.log (tudo)
        const action = {
            type: '[TUDO] Add Tudo',
            payload: tudo
        }
    
        dispatch (action)
    }

    const handleDeleteTudo = ( id ) => {
        //console.log(id)
        dispatch ( {
            type: '[TUDO] Remove Tudo',
            payload: id
        })
    }
    
    const handleToggleTudo = (id) => {
        //console.log(id)
        dispatch ( {
            type: '[TUDO] Toggle Tudo',
            payload: id
        })
    }

    return {tudos, tudosConteo: tudos.length, tudosPendientes: tudos.filter(t=>!t.done).length,  handleNewTudo, handleDeleteTudo, handleToggleTudo}

}
