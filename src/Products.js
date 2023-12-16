import React,{Component} from "react";
import { withRouter } from "./components/utils/withRouter";

class Products extends Component {
    constructor(props){
        super(props)
        this.state = {
            car:'Ferrari'
        }

    this.changeCarName = this.changeCarName.bind(this);
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
    
    changeCarName() {
        this.setState ({
            car:'Benz'
        })
    }

    render(){
        return (
            <div className="App">
                <h1>{this.state.car}-{this.props.location?.state?.model}</h1>
                <button  onClick={() => this.changeCarName()}>
                    Change
                </button>
            </div>
        )
    }
}

export default withRouter(Products)
