import React from 'react';

export const themes = {
    light: {
        foreground: 'white',
        background: 'white',
    },
    dark: {
        foreground: 'black',
        background: 'black',
    },
};

export const ThemeContext = React.createContext(
{
    theme: themes.dark,
    changeTheme: () => { }
}
);