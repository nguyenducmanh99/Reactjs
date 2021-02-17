import React from 'react';
import { ThemeContext, themes } from './ThemeContext'
import Parent from './Parent'
class Grand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.dark
        }
    }

    changeTheme = () => {
        this.setState(state => ({
            theme: state.theme === themes.dark ? themes.light : themes.dark
        }

            ));
    }

    render(){
        const themeAndMethod = {
            theme: this.state.theme,
            changeTheme : this.changeTheme
        };
        return (
            <ThemeContext.Provider value={themeAndMethod}>
                <Parent />
             
            </ThemeContext.Provider>
        );
    }
}

export default Grand;