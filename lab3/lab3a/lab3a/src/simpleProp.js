import React, { Component } from 'react';

class SimpleProp extends Component {
    divStyle={
        borderRadius: "25px",
        border:"1px solid #cccccc",
        padding: "2%",
        margin: "5%",
        width: "50%",
        hight: "30%",
        backgroundColor: "red"
    };
    parStyle={
        color:"blue",
        backgroundColor: "lightblue"
         } ;
     firstDiv={ 
            backgroundColor: "#cccccc",
            width: "25%",
            hight: "30%",
            margin:"1%",
            padding:"1%"}    
render() {
   return (
   <>
        <div style={this.firstDiv}>
           <p>first paragraph </p>
           <p>another paragraph</p>
        </div>
         <div style={Object.assign(this.divStyle,this.parStyle)} >
            <p>first paragraph </p>
            <p>another paragraph</p>
        </div>
    </>
  )
}
}
export default SimpleProp;
