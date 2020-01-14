import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR
} from '../actions/types'

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
}


export default (state = initialState, action) => {
  // !!! .type !!! <-- Don't forget eacht ime

  switch (action.type) {
    case GET_LOGS:
      console.log(action.payload.data);
      console.log("Hello from reducer logs");


      return {
        ...state,
        logs: action.payload,
        loading: false
      }

    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
}