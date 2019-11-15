const todoListInit = [
    {
        id: -3,
        text: '打麻将',
        completed: false
    },
    {
        id: -2,
        text: '打篮球',
        completed: false
    },
    {
        id: -1,
        text: '读书',
        completed: true
    }
]
const todos = (state = todoListInit, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'DEL_TODO':
            return state.filter((item)=> {
                return item.id !== action.id
            });

        case 'TOGGLE_TODO':
            return state.map(todo=>
                todo.id === action.id ? {...todo, completed: !todo.completed} : todo
            )
        default:
            return state
    }
}

export default todos