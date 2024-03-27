import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {RouterProvider} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {router} from "./router";
import {store} from "./store";
import {ThemeSwitching} from "./components";
import {ThemeSwitcherProvider} from "react-css-theme-switcher";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const themes = {
    light: './components/Style/themes/light.css',
    dark: './components/Style/themes/dark.css',
};

const App = () => {
    return (
        <ThemeSwitcherProvider
            insertionPoint={document.getElementById('background')}
            themeMap={themes}
            defaultTheme={'dark'}
        >
            <ThemeSwitching/>
        </ThemeSwitcherProvider>
    );
};

root.render(
        <Provider store={store} >
            <RouterProvider router={router} />
            <App/>
        </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
