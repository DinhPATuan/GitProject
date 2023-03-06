import React, { Component } from 'react';

class App extends Component{
  constructor (props) {
    super(props);
    this.state = {
      Login: false
    };
  }

  btnLogIn = () => {
    this.setState({Login: true})
  }

  btnLogOut = () => {
    this.setState({Login: false})
  }
  
  render () {
    const {Login} = this.state
    if (Login) return (
      <div style={{textAlign: 'center'}}>
        <div>
          <h1>User Name</h1>
          <button onClick={this.btnLogOut}>Log out</button>
        </div>
      </div>)
    return (
      <div style={{textAlign: 'center'}}>
        <div>
            <h1>Not Login</h1>
            <button onClick={this.btnLogIn}>Log in</button>
        </div>
      </div>
    )
  }
}
 
export default App;