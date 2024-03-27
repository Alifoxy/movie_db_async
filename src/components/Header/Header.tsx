import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import '../Style/images/user_icon.png'
import Switch from '@mui/material/Switch'
import {ChangeEvent, useState} from "react";
import styled from "styled-components";




const Header = () => {
    const [checked, setChecked] = useState(false);
    const label = { inputProps: { 'aria-label': 'Color switch demo' } };
    const changer  = (event:ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return (
        <div className={css.Header}>
            <NavLink to={'movies/1'}>Movies</NavLink>
            <NavLink to={'search'}>Search</NavLink>
            <div className={'user'}>
                <div>Hello, user!</div>
                <img src={require('../Style/images/user_icon.png')} alt={'user icon'} width={50} height={50}/>
            </div>
            <div>
                <Switch {...label}  checked={checked} onChange={changer}/>
            </div>
        </div>
    );
};

export {Header};