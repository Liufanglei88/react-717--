import React, { Component } from "react";
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import router from './router/router.config'
import RouterWrapper from './components/routerWrap/routerWrap'
class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <Switch>
           <Redirect exact from='/' to='/index/home'/>
           <RouterWrapper routes={router.routers}/>  
        </Switch>
       </BrowserRouter>
    )
  }
}

export default App;
