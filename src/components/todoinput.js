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

        if (this.state.title.trim()){
            this.props.addToDoProps(this.state.title);
            this.setState({
                title: ""
            })
        }
        else{
            alert("Please input a title")
        }
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