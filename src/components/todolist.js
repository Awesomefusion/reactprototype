import React from "react"
class ToDoList extends React.Component{
    render()
    {
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => (
                    <li>{todo.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default ToDoList