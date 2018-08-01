import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Gifs from './components/Gifs'
import GifView from './components/GifView'

class App extends Component {
    render() {
        return ( 
            <div>
                <Header />
                <Switch>                
                    <Route exact path="/" component={Gifs} />
                    <Route path="/gifview/:id" component={GifView} />
                    <Route path="**" component={Gifs} />
                </Switch>
            </div>
        );
    }
}
export default App;