import React from 'react';
import Footer from './components/footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import './index.less'

class TodoList extends React.Component{

    render() {
        return (
            <div className="todoList-box">
                <Footer/>
                <VisibleTodoList/>
                <AddTodo/>
            </div>
        )
    }
}



export default TodoList