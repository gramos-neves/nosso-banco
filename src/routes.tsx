import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Sucess from './pages/Sucess';


const Routes = () => (
         <BrowserRouter>
              <Switch>
                 <Route path="/" exact component={Login} /> 
                 <Route path='/Register' component={Register} />
                 <Route path="/home" component={Home} />
                 <Route path="/sucess" component={Sucess} />
             </Switch>                 
         </BrowserRouter>
    )


export default Routes 
