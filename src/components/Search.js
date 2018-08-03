import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return ( 
            <form className="form-inline mt-2 mt-md-0" onSubmit={this.props.handleSubmit}>
                <div className="input-group my-2 my-sm-0">
                    <input className="form-control input-lg" type="text" placeholder="Search all the GIFs" aria-label="Search" value={this.props.q} onChange={this.props.handleInputChange} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-success" type="submit"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
        );
    }
}
export default Search;