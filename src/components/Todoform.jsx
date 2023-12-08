import React, { Component} from "react";
import { v4 as uuidv4 } from 'uuid';


export class TodoForm extends Component{

    constructor(props){
      super(props);
      this.state = {
        value: null
      }
    }
  
    onChange = (e) => {
      this.setState({
        value: e.target.value,
      })
    
    }

    onClick = () => {
      let id = uuidv4();
      this.props.onSubmit({id:id,title:this.state.value,isCompleted:false})
        this.setState({
            value: ''
        })
    }
    render() {
    const {value} = this.state;
    return(
          <div>
            <label htmlFor="todo">Todo</label>
            <input value={value} id="todo" onChange={this.onChange} />
            <button onClick={() => {
            this.onClick()
          }}>Add Todo</button>
          </div>
    )
    }
  }