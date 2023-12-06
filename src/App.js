import React, { Component } from "react";
import { PropsAndState } from "./components/PropsAndState";

export class App extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {
      text: "",
    };
    this.textChangeHandler = this.textChangeHandler.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("GET DERIVED STATE FROM PROPS", props, state);
    return null;
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  textChangeHandler(event) {
    this.setState({
      ...this.state,
      text: event.target.value,
    });
  }

  numberChangeHandler = (event) => {
    this.setState({
      ...this.state,
      number: event.target.value,
    });
  };

  shouldComponentUpdate(props, state) {
    console.log("SHOULD UPDATE", props, state);
    return true;
  }

  componentDidUpdate() {
    console.log("Component Did update");
  }

  render() {
    const { text, number } = this.state;
    const { name } = this.props;
    console.log("RENDER");

    return (
      <div className="App">
        <h1>{name}</h1>
        <div>
          <label htmlFor="text">Text</label>
          <input id="text" value={text} onChange={this.textChangeHandler} />
          <PropsAndState text={text} number={null}/>
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <input
            id="number"
            value={number}
            onChange={this.numberChangeHandler}
          />
          <PropsAndState text={null} number={number}/>
        </div>
        <Products model="2021" />
      </div>
    );
  }
}
