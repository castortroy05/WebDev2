import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  margin: 40px;
  border: 1px black solid;
  background-color: #cccccc;
`;

const Content = styled.p`
  font-size: 16px;
  text-align: center;
  padding: 2px;
`;

class StyledBox extends Component {
  render() {
    return (
 	 <Box>
    		<Content> Styling React Components </Content>
  	</Box>
 );
}
}

export default StyledBox;
