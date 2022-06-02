import React from "react";
import { writeComments } from "./lib/firebase";

export class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClick = this.handleClick.bind(this);

      this.state.placeHolder = 'Har du noen flere tilbakemeldinger?'
      this.state.onOff = false;
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      console.log('A name was submitted: ' + this.state.value);
      writeComments(this.state.value)
      this.state.placeHolder = 'Tusen hjertelig❤️'
      this.setState({value: event.target.value = ''})
      this.state.onOff = true;
      event.preventDefault();
    }

    handleClick(event) {
      this.setState({placeHolder: event.target.placeHolder = '...'})
    }
  
    render() {
      return (
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            <input onClick={this.handleClick} disabled={this.state.onOff} required id="comments" useref="someName" type={this.state.active} placeholder={this.state.placeHolder} value={this.state.value} onChange={this.handleChange} />
          </label>
          <input disabled={this.state.onOff} className='btn' type="submit" value="Submit" />
        </form>
      );
    }
  }
  