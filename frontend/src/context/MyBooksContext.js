import { createContext, useReducer } from 'react'

export const MyBooksContext = createContext()

export const myBooksReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MYBOOKS':
            return {
                myBooks: action.payload
            }
        case 'CREATE_MYBOOKS':
            return {
                myBooks: [action.payload, ...state.myBooks]
            }
        default:
            return state        
    }
}


export const MyBooksContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(myBooksReducer, {
        myBooks: null
    })

    return (
        <MyBooksContext.Provider value={{state, dispatch}}>
            { children }
        </MyBooksContext.Provider>
    )
}
