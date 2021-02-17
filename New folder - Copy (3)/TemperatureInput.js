import React from 'react';

class TemperatureInput extends React.Component {
    render(){
        return(
            <fieldset>
                <legend>Enter temperature in {this.props.typeTemperature}:</legend>
                <input value={this.props.temperature}
                onChange={(e) => this.props.onTemerratureChange(e.target.value)} />
            </fieldset>
        );
    }
}

export default TemperatureInput;