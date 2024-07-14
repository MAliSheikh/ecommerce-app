// redux thunk
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slices/todoSlice'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

// Redux  Toolkit

// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./slices/cartSlice";

// export const store = configureStore({
//     reducer: {
//         cart : cartReducer,
//     },
//     devTools: true,
// });


// simple Redux
// import { createStore } from 'redux';

// const initialState = 0;

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// }

// const store = createStore(reducer);

// export default store;