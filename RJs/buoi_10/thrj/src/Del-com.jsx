import React,{Component} from "react";

class Del extends Component{
    constructor(props){
        super(props);
        this.state = {
            show: true
        }
    }

    componentWillUnmount(){
        alert('Component se bi xoa')
    }  


    render(){
        return(
        <div>
            <p>Alo Ajinomoto</p>         
        </div>)
    }
}

export default Del;