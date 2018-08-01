// src/redux/reducers/gifs.js
const initialState = {
    gifs: [],
    gif: {}
}
export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_GIFS' :
            return {
                ...state,
                gifs: action.gifs
            }
        case 'VIEW_GIF':
            return {
                ...state,
                gif: action.gif
            }
        case 'LIKE_GIF':
            let gif = Object.assign({}, state.gif)
            gif.likes++
            console.log(gif)
            return {
                ...state,
                gif: gif
            }
        default:
            return state
    }
}