import React from 'react';
import Whoops404 from './error404'
import App from './App';
import Cal from './Calc';
import Api from './api';
import {
    BrowserRouter,
    Route,
    Switch
   } from 'react-router-dom';

function Abc(){

return (
<BrowserRouter>
    <div>
        <Switch>
       
        <Route exact path='/' component={App}/>
        <Route path='/cal' component={Cal}/>
        <Route path='/api' component={Api}/>
        <Route component={Whoops404}/>
        </Switch>
    </div>
</BrowserRouter>
);
}

  


export default Abc;