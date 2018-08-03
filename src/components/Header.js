import React, { Component } from 'react';
import Search from './Search';

class Header extends Component {

    constructor(props)
    {
        super(props)
    }

    render() {
        return ( 
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="/">Giphy App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <Search handleInputChange={this.props.handleInputChange} handleSubmit={this.props.handleSubmit} q={this.props.q} />
                </div>
            </nav>
        );
    }
}
export default Header;