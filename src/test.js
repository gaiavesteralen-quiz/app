import React from "react";
import { writeComments } from "./lib/firebase";
import {  slideInRight, slideInDown, fadeIn, fadeInRight, zoomIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

const styles = {
  fadeInRight2: {
    animation : 'x 0.7s',
    animationName: Radium.keyframes(fadeInRight)
  },
}


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
        <form className="form" onSubmit={this.handleSubmit} style={styles.fadeInRight2}>
          <label>
            <input onClick={this.handleClick} disabled={this.state.onOff} required id="comments" useref="someName" type={this.state.active} placeholder={this.state.placeHolder} value={this.state.value} onChange={this.handleChange} />
          </label>
          <input disabled={this.state.onOff} className='btn answerBtn' type="submit" value="Send" />
        </form>
      );
    }
  }
  