import React, {createContext, FC, PropsWithChildren, useState} from 'react';

const ThemeContext = createContext<{theme:string, toggleTheme:any, isDark:boolean}>({theme:'dark', toggleTheme:null, isDark:true});

interface IProps extends PropsWithChildren {

}
const ThemeProvider:FC<IProps> = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => {
        setTheme(theme ==='light' ? 'dark' : 'light');
        setIsDark(!isDark)
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };