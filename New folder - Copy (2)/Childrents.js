import React from 'react'
import { ThemeContext } from './ThemeContext'
function Childrents (props){
    return (
        <ThemeContext.Consumer>
{
     ({ themes, changeTheme}) =>
      <div>
          <h1 style={{ backgroundColor: theme.background, color:theme.foreground }}>
              Message from Grand:
          </h1>
          <button style={{ backgroundColor: theme.background, color: theme.foreground}}>
              Chau biet roi
          </button>
          <button onClick={changeTheme}>Change</button>
      </div>
}
        </ThemeContext.Consumer>
      );
}
export default Childrents;