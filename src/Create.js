import {useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [image, setImage] = useState('');
    const history = useHistory();

    // code to submit the form the the json server
    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { title, body, author, image };

        setIsPending(true);

        fetch('https://www.npoint.io/docs/10bd19e2467cb9b3a20b', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(book),

        }) .then (() => {
            console.log('new book added');
            setIsPending(false);
            //history.go(-1);
            history.push('/');
        })
    }

    return (  
<div className="create">
        <h2>Add a new picture </h2>
        <form onSubmit={handleSubmit}> 
            <label>title:</label>
            <input 
            type="text" 
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <label>body:</label>
            <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Artist:</label>
            <input 
            type="text" 
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            />
            <label>picture url:</label>
            <input 
            type="text" 
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
            {!isPending && <button>Add Picture</button>}
            {isPending && <button disabled>Adding Picture...</button>}
        </form>

</div>


    );
}
 
export default Create;