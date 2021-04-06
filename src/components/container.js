import React from "react"
import ToDoList from "./ToDoList"
import Header from "./Header"
import ToDoInput from "./ToDoInput"

class Container extends React.Component{
    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: false
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
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
          id: 4,
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
            <div>
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
        )
    }
}
export default Container