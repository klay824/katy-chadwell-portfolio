import React, { Component } from "react";
import WorksDetail from "../Components/Pages/WorksDetail";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    render() {
        return (
            <div className="mt-5">
                <WorksDetail />
            </div>
        )
    }
}

export default App;
