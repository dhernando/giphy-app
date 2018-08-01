//src/redux/reducers/authUser.js
const initialState = {
    user: {},
    isAuth: false
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
        return {
            ...state,
            isAuth: Object.keys(action.user).length > 0 ? true : false,
            user: action.user
        }
    default:
      return state;
  }
}