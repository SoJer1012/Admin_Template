// import { ADD_COUNT,REDUCE_COUNT } from "../actionTypes";

const initState = {
    count: 0
}

export default function countReducer(state = initState, action) {
    switch (action.type) {
        case 'ADD_COUNT':
            return {
                count: state.count + 1
            };
        case 'REDUCE_COUNT':
            return {
                count: state.count - action.num
            };
        default:
            return state;
    }
}