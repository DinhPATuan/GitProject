import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Alerttext from "./Alert";
function App(props){
  return(
    <div class="alert alert-primary" role="alert">
      <Alerttext text="Tai nguyen khong ton tai"></Alerttext>
    </div>)
}
export default App;