import {combineReducers, createStore} from "redux";
import {appReducer} from "./appReducer";


const rootReducers = combineReducers({
    app: appReducer
})

export type RootStateType = ReturnType<typeof rootReducers>
export const store = createStore(rootReducers)