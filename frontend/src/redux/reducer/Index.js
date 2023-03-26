import { combineReducers } from "redux";
import Reducer from './Reducer'
import ErrorReducer from "./ErrorReducer";
import Offersreducer from "./Offer_red";

const rootreducer=combineReducers({
   Reducer,ErrorReducer,Offersreducer
})

export default rootreducer