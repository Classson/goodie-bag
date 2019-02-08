// import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
// import axios from 'axios'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
// import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk

// export default createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(
//     // `withExtraArgument` gives us access to axios in our async action creators!
//     // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
//     thunkMiddleware.withExtraArgument({axios}),
//     loggingMiddleware
//   ))
// )

import axios from 'axios'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const GET_CANDIES = 'GET_CANDIES'

const getCandies = (candies) => {
  return {
    type: GET_CANDIES,
    candies
  }
}

export const requestCandy = () => {
  return async(dispatch) => {
    const { data } = await axios.get('/api/candies');
    dispatch(getCandies(data))
  }
}

const initialState = {
  candies: []
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case GET_CANDIES:
      return {...state, candies: action.candies}
    default:
      return state;
  }
}

const middleWares = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleWares)

export default store
