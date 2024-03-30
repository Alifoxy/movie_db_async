import React, {ChangeEvent, useContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {RouterProvider} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {router} from "./router";
import {store} from "./store";
import {ThemeProvider} from "./hoc/ContextProvider";
import styled from "styled-components";
// import {ThemeSwitcherProvider} from "react-css-theme-switcher";
// import {ThemeSwitcher} from "./components";
// import {ThemeSwitcherProvider} from "react-css-theme-switcher";
// import {ThemeProvider} from "@mui/material";
// import {darkTheme, lightTheme} from "./components/Theme Switcher/themes/themes";
// import {ThemeContext} from "./components/Theme Switcher/themes/ThemeContext";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const themes = {
    light: '../public/light.css',
    dark: '../public/dark.css',
};


// const App = () => {
//     return (
//         <ThemeSwitcherProvider
//             defaultTheme="light"
//             themeMap={themes}
//         >
//             <ThemeSwitcher />
//         </ThemeSwitcherProvider>
//     );
// };

root.render(

    <ThemeProvider>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </ThemeProvider>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
