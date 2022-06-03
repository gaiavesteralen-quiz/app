import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Navbars extends React.Component {
    constructor(props) {
        super(props);
        this.handleCLicks = this.handleCLicks.bind(this);
        
        this.btnClasses = 'link'
      }
        handleCLicks(event) {
        document.location.reload()
    }
    
    render() {
        const nav = 
    <button onClick={this.handleCLicks} className={this.btnClasses} href="#">
        <h3>🏠<br/>
        <span class="underline_small"><span>&#8592;</span> Hjem</span>
        </h3>
    </button>
        return nav
    }
}