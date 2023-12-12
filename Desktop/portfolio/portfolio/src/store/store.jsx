import { createStore } from 'redux';
import rootReducers from "../reducers/RootReducers";


const store = createStore(rootReducers)

export default store;

