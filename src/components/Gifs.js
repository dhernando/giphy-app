// src/components/Feed.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadGifs } from './../redux/actions/actions'

const mapStateToProps = state => {
    return {
        gifs: state.gifs.gifs
    }
}
class Gifs extends Component {
    componentWillReceiveProps(nextProps) {
        
    }
        
    componentWillMount() {
        this.props.loadGifs()
    }
    
    render() {

    const gifs = this.props.gifs.reverse().map((gif)=>
                <div className="card" key={gif.id}>
                    <a className="" href={`/gifview/${gif.id}`}><img className="card-img-top" src={gif.sizes.width["200"].url} alt={gif.title} /></a>
                    <div className="card-body">
                        <h5 className="card-title"><a className="" href={`/gifview/${gif.id}`}>{gif.title}</a></h5>
                        <form method="get" action="">
                            <button className="btn btn-outline-success" type="submit"><i className="far fa-heart"></i></button>
                        </form>
                        <span className="like-count">{gif.likes}</span>
                    </div>
                </div>
            )
        return ( 
            <div>
                <div className="container-fluid main-container">
                    <div className="card-columns">
                        {gifs}
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, { loadGifs })(Gifs);