import './colourpallet.scss';
import React, {Component} from 'react';
import  Navigation from './nav';
import './theme.scss';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          theme:"theme-1"
      };
      this.handleChange = this.handleChange.bind(this);
  }
handleChange(){
 if (this.state.theme =="theme-1"){this.setState({theme: 'theme-2'});} else {this.setState({theme: 'theme-1'});}
}
render(){
  return (
    <>
    <span className="container">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>  
      <div className="box">rr</div> 
    </span>

    <div className={this.state.theme}>
      <div className="container"> 
          <div className="left">   
              <Navigation />   
          </div>
         <div className="right">
              <button className="button" onClick={ this.handleChange} >Button </button>
        </div>
      </div>
    </div>
    </>
  );
  }
}

export default App;