// src/components/Gif.js
import React, { Component } from 'react';

class Gif extends Component {

    constructor(props){
        super(props);
        this.state = {isHovered: false };
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(){
        this.setState({
            isHovered: !this.state.isHovered
        });
    }
    
    render() {

        const gifHoverClass = this.state.isHovered ? "show-gif-hover" : "";
        
        return (
            <div>
                <div className={ "card text-white bg-dark " + gifHoverClass } onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                    <a className="" href={`/gifview/${this.props.gif.id}`}><img className="card-img-top" src={this.props.gif.sizes.width["200"].url} alt={this.props.gif.title} /></a>
                    <div className="gif-hover">
                        <a href="#"><i className="fas fa-heart text-white"></i></a>
                        <span className="like-count">{this.props.gif.likes}</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Gif;