import React from "react"
import ToDoItem from "./ToDoItem"

class ToDoList extends React.Component{

    render()
    {
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => (
                    <ToDoItem key={todo.id}
                        todo={todo}
                        handleChangeProps={this.props.handleChangeProps}
                        deleteTodoProps={this.props.deleteTodoProps}
                    />
                    ))}
                </ul>
            </div>
        )
    }
}
export default ToDoList