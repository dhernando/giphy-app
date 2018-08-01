// src/redux/actions/actions.js
/** */
import axios from 'axios'
//const url = "http://localhost:5000/api/"
const url = process.env.NODE_ENV === 'production' ? "/api/v1/" : "http://localhost:5000/api/v1/"

export function loadGifs () {
    return (dispatch) => {
        axios.get(`${url}gifs`)
        .then((res) => {
            let gifs = res.data.data
            dispatch({type:'LOAD_GIFS', gifs})
        }).catch((err) => {
            console.log(err)
        })
    }
}
export function getUser (_id) {
    return axios.get(`${url}user/${_id}`).then((res)=>{
        return res.data
    }).catch(err=>console.log(err))
}
export function getGif (gif_id) {
    return (dispatch) => {
        axios.get(`${url}gif/${gif_id}`)
        .then((res) => {
            let gif = res.data
            dispatch({type: 'VIEW_GIF', gif})
        }).catch((err) => console.log(err))
    }
}
//req.body.gif_id
export function like (gif_id) {
    return (dispatch) => {
        axios.post(`${url}gif/like`,{ gif_id }).then((res) => {
            dispatch({type:'LIKE_GIF'})
        }).catch((err)=>console.log(err))
    }
}
export function SignInUser (user_data) {
    return (dispatch) => {
        axios.post(`${url}user`,user_data).then((res)=>{
            let user = res.data
            localStorage.setItem('Auth', JSON.stringify(user))
            dispatch({type: 'SET_USER', user})
        }).catch((err)=>console.log(err))
    }
}
export function toggleClose() {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_MODAL', modalMode: false})
    }
}
export function toggleOpen() {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_MODAL', modalMode: true})        
    }    
}