// src/components/Feed.js
import React, { Component } from 'react';

import Header from '../components/Header'
import Gif from '../components/Gif';

import axios from 'axios'
import ReactLoading from 'react-loading';
import MasonryInfiniteScroller from 'react-masonry-infinite';

const API = 'http://localhost:5000/api/v1/';
const OFFSET = 25;

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            q: '',
            gifs: [],
            offset: 0,
            hasMoreItems: false,
            isFetching: false
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    fetchGifs(){ 
        
        this.setState({
            isFetching: true
        });

        let endpoint = 'trending';
        let params = '?offset=' + this.state.offset;

        if(this.state.q && this.state.q != '')
        {
            endpoint = 'gifs';
            params += '&q=' + this.state.q;
        }

        axios.get(API + endpoint + params)
        .then(res => {

            let hasMoreItems = false;

            //Check if has more items
            if (res.data.data.length >= OFFSET)
                hasMoreItems = true;

            //Reset or concat gif array
            if(this.state.offset > 0)
            {
                this.setState({
                    hasMoreItems: hasMoreItems,
                    gifs: this.state.gifs.concat(res.data.data),
                    isFetching: false
                });
            }
            else
            {
                this.setState({
                    hasMoreItems: hasMoreItems,
                    gifs: res.data.data,
                    isFetching: false
                });

                window.scrollTo(0, 0);
            }
        });

    }

    componentDidMount(){
        
        if(!this.state.isFetching)
            this.fetchGifs();
    }

    handleInputChange(e){
        this.setState({
            q: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            offset: 0
        })

        this.fetchGifs();
    }

    async loadMore () {

        if(!this.state.isFetching)
        {
            this.setState({
                offset: this.state.offset + OFFSET
            });
    
            this.fetchGifs();
        }
    }

    render() {
        let loadingComponent = <ReactLoading type={'bars'} color={'#444'} height={'20%'} width={'20%'} />

        return ( 

            <div>
                <Header handleInputChange={ this.handleInputChange } handleSubmit={ this.handleSubmit } q={ this.state.q } />

                <div className="container main-container">

                    {
                        this.state.gifs.length > 0 && 

                        <MasonryInfiniteScroller
                            className={'masonry'}
                            hasMore={this.state.hasMoreItems}
                            loadMore={this.loadMore}
                            pack={true}
                            sizes={[{ columns: 1, gutter: 20 }, { mq: '768px', columns: 2, gutter: 20 }, { mq: '1024px', columns: 4, gutter: 20 }]}
                        >
                            {
                                this.state.gifs.map((gif, i) =>
                                    <Gif gif={gif} key={i}/>
                                )
                            }
                        </MasonryInfiniteScroller>
                    }
                    
                </div>

                { this.state.isFetching && loadingComponent }
            </div>
        );
    }
}
export default Home;