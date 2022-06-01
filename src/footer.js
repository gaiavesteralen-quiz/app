import React from "react";
import Radium, {StyleRoot} from 'radium';
import { zoomIn } from 'react-animations'

const styles = {
    zoomIn : {
      animation: 'x 0.5s',
      animationName: Radium.keyframes(zoomIn),
    }
  
  }

export class Footer extends React.Component {
    render() {
        const btn = 
        <StyleRoot className="container">
            <div className="footer" style={styles.zoomIn}>av Gaia Talent</div>
        </StyleRoot>

        return btn
        
    }
      
}