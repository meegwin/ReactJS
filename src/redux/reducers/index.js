import { combineReducers } from "redux";
import gioHangReducer from './gioHangReducer';
import userReducer from './../../user-management-html/modules/reducer';
const rootReducer = combineReducers({
    // reducer con 
    // gioHangreducer : gioHangreducer,
    gioHangReducer,
    userReducer,
});

export default rootReducer;