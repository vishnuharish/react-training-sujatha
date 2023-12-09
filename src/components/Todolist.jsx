import React, {Component} from "react";
export class TodoList extends Component {
 
    constructor(props){
    super(props)
    }
    render(){
      const {todos} = this.props;
  
      return (
      <div>
          <ul>
            {
              todos?.map( todo => ( <li key={todo.id}>{todo.title}
              <button
                onClick={() => this.props.removeItem(todo.id)}
              >
                X
              </button>
              </li> ))
            }
          </ul>
        </div>
      )
    }
  }
