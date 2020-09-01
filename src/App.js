import React from 'react';
import Home from './pages/Home';
import Bytes from './pages/Bytes';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
        <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/article/:id" exact component={Bytes} />
        </Switch>
   </div>
    </Router>
   
      
    
  );
}

export default App;
