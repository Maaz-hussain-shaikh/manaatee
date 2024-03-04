import changeThenumber from "./changereducer";
import { combineReducers } from "redux";

const rootreducer=combineReducers({
    changeThenumber:changeThenumber
})
export default rootreducer;