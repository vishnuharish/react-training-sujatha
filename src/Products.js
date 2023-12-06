import React,{Component} from "react";

export class Products extends Component {
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
        const {model} = this.props;
        return (
            <div className="App">
                <h1>{this.state.car}-{model}</h1>
                <button  onClick={() => this.changeCarName()}>
                    Change
                </button>
            </div>
        )
    }
}