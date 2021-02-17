import React from 'react'
import { ThemeContext, themes } from './ThemeContext'
function Childrent (props){
    return (
        <ThemeContext.Consumer>
{
      themes =>
      <div>
          <h1 style={{ backgroundColor: theme.background,color:theme.foreground }}>
              Message from Grand:
          </h1>
          <button style={{ backgroundColor: theme.background, color: theme.foreground}}>
              Chau biet roi
          </button>
      </div>
}
        </ThemeContext.Consumer>
      );
}
export default Childrent;