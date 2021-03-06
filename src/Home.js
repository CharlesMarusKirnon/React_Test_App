
import BookList from "./BookList";
import useFetch from "./useFetch";
// component named Home,
const Home = () => {
    const{data: books, isPending, error} = useFetch('https://api.npoint.io/143397cbebad8da096a2/books/');



// returning the component to be displayed
    return (  

<div className="home">
{error && <div> {error} </div>}
{isPending && <div> Loading... </div>}
   {books && <BookList books={books} title=" All Pictures" />}
    
       
</div>


    );
}
 
export default Home;