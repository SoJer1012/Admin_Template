const initState = {
    a: 1
}

export default function countReducer1(state = initState, action) {
    switch (action.type) {
        case 'ADD':
            return {
                count: state.a + 2
            };
        case 'REDUCE':
            return {
                count: state.a - 2
            };
        default:
            return state;
    }
}