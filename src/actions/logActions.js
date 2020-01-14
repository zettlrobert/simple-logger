import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,

} from './types'


// TO UNDERSTAND
// export const getLogs = () => {
//   // redux-thunk to give back function instead of Object
//   return async (dispatch) => {
//     setLoading();
//     const res = await fetch('/logs');
//     const data = await res.json();
//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     })
//   }
// }


// Refactored, get logs from Server
export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();


    dispatch({
      type: GET_LOGS,
      payload: data
    })

  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    })

  }
}


// Problem with FETCH API
export const addLog = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch('logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(log),
    });

    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });

  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    })
  }



}


// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}