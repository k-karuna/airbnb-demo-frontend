import React, { Component } from "react";
import Landing from "./Landing";
import Homes from "./Homes";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/homes" component={Homes} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
