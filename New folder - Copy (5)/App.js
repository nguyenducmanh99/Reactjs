import React from 'react';
import './App.css';
import style from 'styled-components';

class App extends React.Component {
  render() {
    const H1 = style.h1`
    color: Green;
    background-color: lightBlue;
    padding: 10px;
    font-family: Arial;
    `
    return(
      <div>
        <H1>Full name:Nguyen Duc Manh</H1>
      </div>
    );
  }
}

export default App;
