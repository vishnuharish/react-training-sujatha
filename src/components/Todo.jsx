import React, {Component} from "react";
import { TodoForm } from "./Todoform";
import { TodoList } from "./Todolist";

export class Todo extends Component {
  constructor(props){
    super(props);
    this.state={
      todos:[],

      
    }
  }

  // Sample Todo Object
  //
  // { id: uuid, title: string, isCompleted: boolean}

  onSubmit = (value) => {
    this.setState({
      todos: [...this.state.todos, value]
    })
  }
  removeItem = (id) => {
    this.setState({
      todos: this.state.todos.filter(el => el.id !== id)
    });
  }
  render() {
    const {todos} = this.state;
    return(
      <div>
        <h1>Todos</h1>
        <TodoForm onSubmit={this.onSubmit}/>
        <TodoList todos={todos} removeItem = {this.removeItem} />
      </div>

    )
  }
}
