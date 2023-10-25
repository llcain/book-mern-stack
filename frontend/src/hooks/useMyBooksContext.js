import { MyBooksContext } from "../context/MyBooksContext";
import { useContext } from 'react';

export const useMyBooksContext = () => {
    const context = useContext(MyBooksContext)

    if(!context) {
        throw Error("useMyBooksContext must be used inside a MyBooksContextProvider")
    }

    return context
}