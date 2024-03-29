import {ThemeSwitcherProvider, useThemeSwitcher } from 'react-css-theme-switcher';
import React, {ChangeEvent, FC, PropsWithChildren, useEffect, useState} from "react";
import Switch from '@mui/material/Switch'

interface IProps extends PropsWithChildren {
}

const ThemeSwitching: FC<IProps> = () => {

    const { switcher, themes, currentTheme, status} = useThemeSwitcher();
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
    }, [])

    if (status === 'loading') {
        return <div>Loading styles...</div>;
    }

    // const toggleLightMode = () => {
    //     setIsDark ((isDark => {
    //         switcher({ theme: isDark ? themes.light : themes.dark });
    //         return !isDark;
    //     });
    // };

    const toggleDarkMode = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        switcher({ theme: checked ? themes.dark : themes.light });
        setIsDark(checked)
        // setIsDark (checked => {
        //     switcher({ theme: checked ? themes.light : themes.dark });
        //     return !checked;
        // });
    };
    // ChangeEvent<HTMLInputElement>


    return (
        <div>
            <h5>Current theme: {currentTheme}</h5>
            <Switch onChange={toggleDarkMode} checked={isDark}/>
        </div>
    );
};
export {ThemeSwitching}

