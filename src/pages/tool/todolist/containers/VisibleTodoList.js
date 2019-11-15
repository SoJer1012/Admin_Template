import { connect } from "react-redux";
import { toggleTodo,delTodo } from "../actions/todoList";
import TodoList from '../components/todoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t=>t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t=>!t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}


const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    delTodo: id => dispatch(delTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)