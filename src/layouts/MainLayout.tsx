import {Outlet} from "react-router-dom";
import {Header} from "../components";
import "../components/Style/MainStyle.css"
import "../components/Style/GenresStyle.css"
import "../components/Style/DetailsStyle.css"
import {ThemeProvider} from "styled-components";
import {useState} from "react";


const MainLayout = () => {
    // const [theme, setTheme] = useState('dark');
    //
    // const toggleTheme = () => {
    //     // if the theme is not light, then set it to dark
    //     if (theme === 'light') {
    //         setTheme('dark');
    //
    //     } else {
    //         setTheme('light');
    //     }
    // }
    return (

                <div>
                    <Header/>
                    <Outlet/>
                </div>

    );

};

export {MainLayout};