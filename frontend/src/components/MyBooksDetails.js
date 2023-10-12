const MyBooksDetails = ({ myBook }) => {
    return (
        <div className="mybook-details">
            <h4>{myBook.title}</h4>
            <p><strong>Author: </strong>{myBook.author}</p>
            <p><strong>Genre: </strong>{myBook.genre}</p>
            <p>{myBook.createdAt}</p>
        </div>
    )
}

export default MyBooksDetails