import { configureStore } from "@reduxjs/toolkit";
import { counter,user } from "./reducer/counter";
import { combineReducers } from "@reduxjs/toolkit";
const rootReduser = combineReducers({counter,user})
export const store = configureStore({reducer:rootReduser});