import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
    todos,
    visibilityFilter,
    router: routerReducer
})