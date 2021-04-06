import React from "react"
class ToDoInput extends React.Component{

    state = {
        title: ""
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e =>{
        e.preventDefault();
    };

    render()
    {
        return (
            <div>
                <form
                onSubmit={this.handleSubmit}
                >
                    <input type="text"
                    placeholder="Add Todo..."
                    value={this.state.title}
                    name="title"
                    onChange={this.onChange}
                    />

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default ToDoInput