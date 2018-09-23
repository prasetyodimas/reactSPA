import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter ,browserHistory, Route, Link, Switch } from 'react-router-dom';
//main component
import App from './App';
import Test from './components/docs/layout/LoadingSpinner';
//styles vendor
import 'highlightjs/highlight.pack.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/scss/app.scss';

class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter history={browserHistory}>
        	  <Switch>
          		<Route path="/" exact component={App}/>
	            <Route path="/docs/api/film" exact render={props=>(
                 <div>Why not working child router !!</div>
              )}/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

render(<MainComponent />, document.getElementById('root'));
