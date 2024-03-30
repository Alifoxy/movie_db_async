import React, {useContext, useEffect, useState} from "react";
import Switch from "@mui/material/Switch";
import {useThemeSwitcher} from "react-css-theme-switcher";
import {moviesActions} from "../../store";
import {Simulate} from "react-dom/test-utils";
import {ThemeContext} from "../../hoc/ContextProvider";
import {ThemeProvider} from "../../hoc/ContextProvider";
import {darkTheme, lightTheme} from "./themes/themes";
import styled from "styled-components";


const Switcher = () => {
    const { theme, toggleTheme, isDark} = useContext(ThemeContext);
    // setIsDark(previous => {
    //     switcher({ theme: previous ? themes.light : themes.dark });
    //     return !previous;
    // });
    // const {currentTheme, status, switcher, themes} = useThemeSwitcher();

    // eslint-disable-next-line react-hooks/exhaustive-deps

    // if (status === 'loading') {
    //     return <div>Loading styles...</div>;
    // }

    // const toggleTheme = () => {
    //     // setTheme(theme === 'light'? 'dark' : 'light')
    //     setIsDark (isDark => {
    //         switcher({ theme: isDark? themes.light : themes.dark });
    //         return !isDark;
    //     });
    //     console.log('IT WORKED')
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
        // const theme = {
        //     light: lightTheme,
        //     dark: '.public/dark.css',
        // };
        const themes = {
            light: '../public/light.css',
            dark: '../public/dark.css',
        };



    return (
            <ThemeProvider {...{ theme: 'light' ? themes.light : themes.dark }} >
                <div className={'switcher_div'}>
                    <h5>Current theme: {theme}</h5>
                    <Switch onChange={toggleTheme} checked={!isDark} className={'switch'}/>
                </div>

            </ThemeProvider>
        );
    };
export {Switcher}