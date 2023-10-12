const { useState } = require("react")

const MyBooksForm = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const myBook = {title, author, genre}

        const response = await fetch('/api/myBooks', {
            method: 'POST',
            body: JSON.stringify(myBook),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setAuthor('')
            setGenre('')
            setError(null)
            console.log("new book added", json)
        }
    }

    return (        
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new book</h3>

            <label>Book Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Author:</label>
            <input
                type="text"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
            />

            <label>Genre:</label>
            <input
                type="text"
                onChange={(e) => setGenre(e.target.value)}
                value={genre}
            />
            <button>Add Book</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default MyBooksForm