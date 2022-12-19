import React from 'react';
import {BrowserRouter as Router,Route,Routes,Switch} from "react-router-dom";
import Login from './components/Login';
import PopcornHub from './popHub';
import './CSS/popHub.css';
const App = () => {

return(
<Router>
    <Switch>
    <Route exact path= "/" component={PopcornHub}/>   
    <Route exact path= "/login" component={Login}/>
    </Switch>
 </Router>
);

 }
export default App;