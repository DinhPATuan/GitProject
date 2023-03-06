import React, {Component} from "react";
import Del from "./Del-com";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      show:true,
      color: 'green'
    };
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({color:'blue'})
    },2000)
  }

  delete = () =>{
    this.setState({show:false})
}
 
  render(){
    let info;
    if(this.state.show){
      info = <Del></Del>;
    }
    return(
      <>
      <div style={{backgroundColor: this.state.color,
                    height: 500,
                    width: 1000
      }}></div>
      {info}
      <button onClick={this.delete}>Delete</button>
      </>
    )
  }
}
export default App;
