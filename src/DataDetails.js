import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const DataDetails = () => {
    const {id} = useParams();
    const { data: book, error, isPending } = useFetch('https://github.com/CharlesMarusKirnon/React_Test_App/blob/master/data/db.json' + id);
    const history = useHistory();

   const handleClick= () => {
    fetch('https://github.com/CharlesMarusKirnon/React_Test_App/blob/master/data/db.json' + book.id, {
    method: 'DELETE'

    }) .then(() => {
      history.push('/');
    })
   }
    return (  

<div className="data-details">
{isPending && <div> Loading... </div>}
{error && <div> {error} </div>}
{book && (
<article>
  <h2> { book.title }</h2>
  <p> Written By { book.author }</p>

  <div className="body-details">{book.body}</div>
  <button onClick={handleClick }>delete</button>
</article>

)} 
</div>

    );
}
 
export default DataDetails;