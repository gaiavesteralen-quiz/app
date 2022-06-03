import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Navbars extends React.Component {
    constructor(props) {
        super(props);
        this.handleCLicks = this.handleCLicks.bind(this);
      }
        handleCLicks(event) {
        document.location.reload()
    }
    
    render() {
        const nav = 
    <button onClick={this.handleCLicks} class="link" href="#">
        <h4>🏠</h4>
    </button>
        return nav
    }
}