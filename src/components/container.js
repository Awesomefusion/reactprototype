import React from "react"
import ToDoList from "./ToDoList"
import Header from "./Header"
import ToDoInput from "./ToDoInput"

import { v4 as uuidv4} from "uuid";

class Container extends React.Component{
    state = {
        todos: [
          {
            id: uuidv4(),
            title: "Setup development environment",
            completed: false
          },
          {
            id: uuidv4(),
            title: "Develop website and add content",
            completed: false
          },
          {
            id: uuidv4(),
            title: "Deploy to live server",
            completed: false
          }
        ]
       };
      handleChange = id => {
        this.setState(prevState => ({
          todos: prevState.todos.map(todo => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed,
              }
            }
            return todo
          }),
        }))
      };
      delTodo = id => {
        this.setState({
          todos: [
            ...this.state.todos.filter(todo => {
              return todo.id !== id;
            })
          ]
        });
      };

      addToDoItem = title =>{
        const newTodo = {
          id: uuidv4(),
          title: title,
          completed: false
        };
        this.setState({
          todos: [...this.state.todos, newTodo]
        });

      };

    render()
    {
        return (
            <div className="container">
              <div classname="inner">
              <Header />
                <ToDoInput 
                  addToDoProps={this.addToDoItem}
                />
                <ToDoList
                  todos={this.state.todos}
                  handleChangeProps={this.handleChange}
                  deleteTodoProps={this.delTodo}
                />
              </div>
            </div>
        )
    }
}
export default Container