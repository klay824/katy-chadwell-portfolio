import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/Pages/About";
import Footer from "./Components/Footer";
import "./style.css";


function App() {
  return (
    <div>
      <Router>

        <Header />
        <main>
          <Route exact path="/about" component={About} />

        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
