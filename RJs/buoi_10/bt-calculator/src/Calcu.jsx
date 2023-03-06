import React,{Component} from "react";

class Calcu extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstNum: '',
            secondNum: '',
            result:'',
        };
    }
   
    changeInputValue(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    add = () =>{
        let firstNum = Number(this.state.firstNum);
        let secondNum = Number(this.state.secondNum);
        this.setState({result: firstNum + secondNum})
    }

    sub = () =>{
        let firstNum = Number(this.state.firstNum);
        let secondNum = Number(this.state.secondNum);
        this.setState({result: firstNum - secondNum})
    }

    mul = () =>{
        let firstNum = Number(this.state.firstNum);
        let secondNum = Number(this.state.secondNum);
        this.setState({result: firstNum * secondNum})
    }

    div = () =>{
        let firstNum = Number(this.state.firstNum);
        let secondNum = Number(this.state.secondNum);
        this.setState({result: firstNum / secondNum})
    }

    render(){
        let result = Number(this.state.result);
        return(
            <div>
                <input  onChange={e => this.changeInputValue(e)} name = 'firstNum'/>
                <input  onChange={e => this.changeInputValue(e)} name ='secondNum'/>
                <button onClick={this.add}>+</button>
                <button onClick={this.sub}>-</button>
                <button onClick={this.mul}>x</button>
                <button onClick={this.div}>:</button>
                <p>{result}</p>
            </div>
        )
    }
}
export default Calcu;