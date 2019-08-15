import React, { Component } from 'react';

export class TodoClass extends Component {
  state = {
    title: '',
    description: '',
    todos: []
  }

  handleChange = (event) => {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newTodo = {title: this.state.title, description: this.state.description};
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  componentDidMount() {
    console.log('class vacamount')
  }

  render() {
    return (
      <div>
        <h1>My Class Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input name='title' value={this.state.title} onChange={this.handleChange}/>
          <label>Description</label>
          <input name='description' value={this.state.description} onChange={this.handleChange}/>
          <button>Add Todo</button>
        </form>
        {this.state.todos.map((todo, index) => {
          return(
            <React.Fragment key={index}>
              <p>{todo.title}</p>
              <p>{todo.description}</p>
            </React.Fragment>
          )
        })}
      </div>
    );
  }
}

export default TodoClass;
