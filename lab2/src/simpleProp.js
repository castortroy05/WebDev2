import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

 class SimpleProp  extends Component { 
              render() {
                     
          return ( 
         <div> 
           <span style={{display:"inline-block", width:"40%"}}> 
             {this.props.name} 
             {this.props.description} 
              £{this.props.price}  
           </span> 
        </div> 
        )  
  } } 
export default SimpleProp; 


