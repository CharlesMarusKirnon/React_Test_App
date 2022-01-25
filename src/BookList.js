import { Link } from "react-router-dom";


const BookList = ({ books, title, }) => {

    return (  



<div className="book-list">
    <h1>{ title }</h1>
{books.map((book) => (
            <div className="book-preview" key={book.id}>
                <Link to={`/books/${book.id}`}>
                <h2>{ book.title }</h2>
                <p>Created By {book.author} </p>     
                </Link>

                <div className="imgLink">
               <Link to={`/books/${book.id}`} > 

               <img className="book-pic" src={book.image} /> 
               
               </Link>
               </div>
            </div>

        ))}


</div>


    );
}
 
export default BookList;