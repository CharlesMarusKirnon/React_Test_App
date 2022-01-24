import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import DataDetails from './DataDetails';
import NotFound from './NotFound';


function App() {
  

  return (
    <Router>
    <div className="App" style={{

    }}>
      {/* navigation bar from navbar.js */}
      <Navbar />
      <div className="content" style={{
        

      }}>

{/*App navigation, home exact path to allow it to pass throug to other pages*/}
      <Switch>
      <Route exact path= "/">  
             <Home  />
      </Route>
      <Route path= "/create">  
             <Create  />
      </Route>
      <Route path= "/books/:id">  
             <DataDetails  />
      </Route>
      <Route path="*"> 
         <NotFound />

      </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
