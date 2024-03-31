import {Outlet} from "react-router-dom";
import {Header} from "../components";
import "../components/Style/MainStyle.css"
import "../components/Style/SearchStyle.css"
import "../components/Style/DetailsStyle.css"
import React from "react";
import {ThemeProvider} from "../hoc/ContextProvider";
import {Wrapper} from "../components/Theme Switcher/themes/StyledComponents";


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
            <Wrapper>
                <div className={'outer_div'}>
                    <Header/>
                    <Outlet/>
                </div>
            </Wrapper>
        </ThemeProvider>
    );

};

export {MainLayout};