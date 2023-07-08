// if we create more than one reducer, we will add all other reducer in main.js and will create a combine reducer,
// the combine reducer will be added in store.js
import {combineReducers} from 'redux';
import { cartreducer } from './reducer';

const rootred = combineReducers({
    cartreducer
});

export default rootred;
