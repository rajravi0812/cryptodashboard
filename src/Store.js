import rootReducer from "./Reducer";
import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [thunk,logger];
const store = createStore(rootReducer,
    compose(applyMiddleware(...middleware))
    );

export default store;