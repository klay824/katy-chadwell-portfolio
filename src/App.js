import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/Pages/About";
import Works from "./Components/Works";
import Footer from "./Components/Footer";
import "./style.css";


function App() {
  return (
    <div>
      <Router>

        <Header />
        <main>
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Works} />

        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
