import { useEffect, useState } from "react"

// components 
import MyBooksDetails from "../components/MyBooksDetails"

const Home = () => {

    const [myBooks, setMyBooks] = useState(null)

    useEffect(() => {
        const fetchMyBooks = async () => {
            const response = await fetch('/api/myBooks')
            const json = await response.json()

            if (response.ok) {
                setMyBooks(json)
            }
        }

        fetchMyBooks()
    }, [])

    return (
        <div className="home">
            <div className="mybooks">
                {myBooks && myBooks.map((myBook) => (
                    <MyBooksDetails key={myBook._id} myBook={myBook} />
                ))}
            </div>
        </div>
    )
}

export default Home