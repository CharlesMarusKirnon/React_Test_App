import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const DataDetails = () => {
    const {id} = useParams();
    const { data: book, error, isPending } = useFetch('https://api.jsonbin.io/b/61eeabdcbd6e744997eae393' + id);
    const history = useHistory();

   const handleClick= () => {
    fetch('https://api.jsonbin.io/b/61eeabdcbd6e744997eae393' + book.id, {
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