import {Link} from 'react-router-dom';

const navbar = () => {

    return (  
      <nav className="navbar" style={{ 
        backgroundColor: 'white',

      }}>
         <h1>Data</h1>
         <div className="links">
          <Link to="/">Home</Link>
            <Link to="/create" style={{
                color:"white",
                backgroundColor: '#f1356d',
                borderRadius: '8px'

            }}>New Page</Link>

         </div>


      </nav>

        
    );
}
 
export default navbar;