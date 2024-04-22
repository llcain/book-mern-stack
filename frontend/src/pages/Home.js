import { useEffect } from "react";
import { useMyBooksContext } from "../hooks/useMyBooksContext";

// components 
import MyBooksDetails from "../components/MyBooksDetails"
import MyBooksForm from "../components/MyBooksForm"

const Home = () => {

    const {myBooks, dispatch} = useMyBooksContext()

    useEffect(() => {
        const fetchMyBooks = async () => {
            const response = await fetch('/api/myBooks')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_MYBOOKS', payload: json})
            }
        }

        fetchMyBooks()
    }, [dispatch])

    return (
        <div className="home">
            <div className="mybooks">
                {myBooks && myBooks.map((myBook) => (
                    <MyBooksDetails key={myBook._id} myBook={myBook} />
                ))}
            </div>
            <MyBooksForm />
        </div>
    )
}

export default Home