import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Home from './pages/home';
import Detail from './pages/detail';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


class App extends Component {  

  render (){

    return (
        <Router>
          <div>
            <Switch>
                <Route exact  path="/" component={Home} />
                <Route path="/detail/:id" component={Detail} />              
            </Switch>
          </div>
      </Router>
    )
  }
}

export default App;
