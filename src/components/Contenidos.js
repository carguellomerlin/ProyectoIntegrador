import React from 'react'
import {Switch, Route} from 'react-router-dom'
import NotFound from './NotFound'
import HomePage from './HomePage'

const Contenido = () =>(

  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/peliculas' component={HomePage} />
    <Route path='/series' component={NotFound} />
    <Route path='/people' component={NotFound} />
    <Route component={NotFound} />
  </Switch>

);

export default Contenido;
