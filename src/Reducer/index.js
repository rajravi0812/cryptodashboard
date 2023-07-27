import gSwitch from "./Reducers";
import reducerSidbar from "./reducerSidebarApi";
import setCurrency from "./setCurrency";
import dOneReducer from "./daysReducer";
import changeCrypto from "./switchcointab";
import {combineReducers} from "redux";
import { loadingReducer,loadingSidebar } from "./Loader";


const rootReducer = combineReducers({gSwitch,reducerSidbar,
    setCurrency,dOneReducer, changeCrypto, loadingReducer,loadingSidebar});

export default rootReducer;