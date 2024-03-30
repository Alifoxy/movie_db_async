import {Outlet} from "react-router-dom";
import {Header} from "../components";
import "../components/Style/MainStyle.css"
import "../components/Style/SearchStyle.css"
import "../components/Style/DetailsStyle.css"
import React from "react";
import styled from "styled-components";
import {ThemeProvider} from "../hoc/ContextProvider";
// import {ThemeSwitcher} from "../components";
// import {ThemeProvider} from "styled-components";
// import {ThemeSwitcherProvider} from "react-css-theme-switcher";
// import {ThemeProvider} from "@mui/material";
// import Switch from "@mui/material/Switch";


const MainLayout = () => {
    // const [theme, setTheme] = useState('dark');
    // const [isDark, setIsDark] = useState(false);
    //
    // const toggleTheme = () => {
    //     setTheme(theme === 'light'? 'dark' : 'light')
    //     setIsDark(!isDark)
    // };
    // const toggleTheme = () => {
    //     // if the theme is not light, then set it to dark
    //     if (theme === 'light') {
    //         setTheme('dark');
    //
    //     } else {
    //         setTheme('light');
    //     }
    // }
    // '.public/dark.css'
    // const Wrapper = styled.div`
    //       background-color: ${(props) => props.theme.background};
    //       color: ${(props)=> props.theme.text};
    //       height: 100vh;
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //     `;

    return (
        <ThemeProvider>
                <div className={'outer_div'}>
                    <Header/>
                    <Outlet/>
                </div>
        </ThemeProvider>
    );

};

export {MainLayout};