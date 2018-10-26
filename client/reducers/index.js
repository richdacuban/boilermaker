// if separating reducers into sub reducers do the following:

// create subReducer files as needed, delineated by need/type/function

// I prefer to keep separate initialState objs in each sub reducer so initialState might be the following since we should initialize to some initial type values:

// const initialState = {
//   examples: [],
//   selectedExample: null,
// };

//then in subReducer files create action types
// (const CAPS_ACTION_TYPE_NAME = 'CAPS_ACTION_TYPE_NAME')
//  --- this helps since acton types are strings, and aliasing them as a a variable helps protect againest typo errors.

// also create action creators
// (const getExamplesFromDb = examples => ({
//    type: CAPS_ACTION_TYPE_NAME, payload: examples
//   }))
//   --- these action creator **FUNCTIONS** take objs coming in (called examples here) and return an object where a type: is a set as an action type and a payload: is set as the obj passed in so that this can be passed to the reducer func/switch case.

// also make some thunks and export them each, they should be async (usually) and here is where you do async calls to db and then dispatch that returned data as an action type by using an action creator to wrap it and therefore set it in the right obj format:
// export const exampleSearch = () => {
// return async dispatch => {
// const { data } = await axios.get('/api/examples');
// dispatch(examplesFromDb(data));
// };
// };

// after the action types, action creators, and (exported) thunk midllewares (for async db calls for data), write and default export your reducer:

// const exampleSubReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_EXAMPLES_FROM_DB:
//       return { ...state, examples: action.payload };
//     case GET_SINGLE_EXAMPLE_FROM_DB:
//       return { ...state, selectedExample: action.payload };
//     case EDIT_EXAMPLE_IN_DB:
//       return {
//         ...state,
//         selectedExample: action.payload,
//       };
//     case GET_NEW_EXAMPLE_FROM_DB:
//       return { ...state, examples: [...state.examples, action.payload] };
//     case DELETE_EXAMPLE_FROM_DB:
//       return {
//         ...state,
//         examples: state.examples.filter(
//           example => example.id !== Number(action.payload)
//         ),
//       };
//     default:
//       return state;
//   }
// };

// export default exampleSubReducer;

//then, IN /reducers/index.js (or whatever the "main" reducer will be called) combine and export all your reducers:

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
