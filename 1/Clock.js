import React from 'react';

class Clock extends React.Component{
render() {
    return(
        <div>
            <h1>Time:{this.props.time.toLocaleTimeString()}</h1>
        </div>
     );  
   }
}
export default Clock;