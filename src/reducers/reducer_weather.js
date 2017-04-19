import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); // the same as line below
      return [action.payload.data, ...state];
  }
  // console.log('Action received ', action);
  return state;
}
