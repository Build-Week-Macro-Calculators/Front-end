import React from "react";
import reactDom from "react-dom"
import { directive } from "@babel/types";

class App extends React.Component {
  constructor(props){
      super(props);
      this.state ={};
  } 
  render() {

    return <div>Hello world</div>

  }
}
reactDom.render(<App />, document.getElementById("root"));