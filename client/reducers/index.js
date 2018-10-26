//example of combining multiple subReducers into one and exporting it

// import { combineReducers } from 'redux';
// import exampleSubReducer1 from './exampleSubReducer1';
// import exampleSubReducer2 from './exampleSubReducer2';

// const rootReducer = combineReducers({
//   exampleSubReducer1,
//   exampleSubReducer2,
// });

// export default rootReducer;

//-------------------------------------------------------~~

//example of solo dummy reducer:

export default function dummyReducer(state = {}, action) {
  return state;
}
