import React from "react";

class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num: 0
        }
    }

    componentDidMount(){
        console.log("test component mounted");
    }

    componentDidUpdate(){
        console.log("component updated");
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

    render(){
        return(
            <div>
                <p>{this.state.num}</p>
                <button onClick={() => {this.setState({num: this.state.num + 1})}}>click me</button>
            </div>
        )
    }
}

export default Test;