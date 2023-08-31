
export const tudoReducer = ( initialState = [], action ) => {

    switch (action.type) {
        case 'ABC':
            throw new Error ('action.type = ABC todavía no está implementada')

        case '[TUDO] Add Tudo':
           return [ ...initialState, action.payload ]  
            // Devolvemos un estado, en este caso, un array; lo que tenemos en ese array de estado más el nuevo
            // que viene en el action.payload

        case '[TUDO] Remove Tudo':
            return initialState.filter( tudo => tudo.id !== action.payload )

        case '[TUDO] Toggle Tudo':
            return initialState.map( tudo => {
                if (tudo.id === action.payload) {
                    return {
                        ...tudo,
                        done: !tudo.done
                    }
                }
                return tudo
            })
                
        default:
            return initialState
    }

}