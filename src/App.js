import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/Pages/About";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
