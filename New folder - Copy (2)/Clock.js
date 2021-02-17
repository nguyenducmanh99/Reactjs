import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date()
        };
    }

    render(){
        return (
            <div>
                <h2>Time:{this.state.time.toLocaleDateString()}</h2>
            <button onClick ={this.updateTime}>
                Update Time
            </button>
            </div>
        );
    }
    updateTime = () =>{
        this.setState(
           {time: new Date()}
        );
    }
}
export default Clock;