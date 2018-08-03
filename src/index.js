import React from 'react';
import ReactDOM from 'react-dom';

import './assets/style.css';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

/*if(localStorage.Auth) {
    // update localstorage
    store.dispatch({type: 'SET_USER', user: JSON.parse(localStorage.Auth)})
    var _id = JSON.parse(localStorage.Auth)._id
    getUser(_id).then((res) => {
        store.dispatch({type: 'SET_USER', user: res})
    })
}*/

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();