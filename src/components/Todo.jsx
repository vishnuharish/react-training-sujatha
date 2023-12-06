import React, {Component} from "react";


export class TodoForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: null
    }
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  
  render() {
  const {onSubmit} = this.props;
  const {value} = this.state;
  return(
        <div>
          <label htmlFor="todo">Todo</label>
          <input value={value} onChange={this.onChange} />
          <button onClick={() => {
          onSubmit(value)
        }}>Add Todo</button>
        </div>
  )
  }
}

export class TodoList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {todos} = this.props;

    return (
    <div>
        <ul>
          {
            todos?.map( todo => ( <li key={todo}>{todo}</li> ))
          }
        </ul>
      </div>
    )
  }
}

export class Todo extends Component {
  constructor(props){
    super(props);
    this.state={
      todos:[] 
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

  render() {
    const {todos} = this.state;
    return(
      <div>
        <h1>Todos</h1>
        <TodoForm onSubmit={this.onSubmit}/>
        <TodoList todos={todos}/>
      </div>

    )
  }
}
