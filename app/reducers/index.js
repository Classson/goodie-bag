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

const requestCandy = async(dispatch) => {
  const { data } = await axios.get('/api/candies');
  dispatch(getCandies(data))
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
