import React,{Component} from 'react';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      list:[],
      item:{name:'',phone:'',mail:''}
    }
  }

  hanldeChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state.item);
  }

  addItem = () =>{
    if(this.state.item !== ''){
      let {list,item} = this.state;
      list.push(item);
      this.setState({list: list, item:''});
      console.log(this.state.list);
    }
  }

  
  render(){
    return(
      <div>
        <h1>TodoApp</h1>
        <input onChange={e => this.hanldeChange(e)} value = {this.state.item} name='item'/>
        <button onClick={this.addItem}>Add</button>
        <div>
          {this.state.list.map((item,index) =>(
            <h3 key={index}>{item}</h3>
          ))}
        </div>
      </div>
    )
  }
}

export default App;
