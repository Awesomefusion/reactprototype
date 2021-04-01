import React from "react"

class ToDoItem extends React.Component{

    render()
    {
        return (
            <div>
                <li>{this.props.todo.title}</li>
            </div>
        )
    }
}
export default ToDoItem