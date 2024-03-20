import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import '../Style/images/user_icon.png'


const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <div className={'user'}>
                <div>Hello, user!</div>
                <img src={require('../Style/images/user_icon.png')} alt={'user icon'} width={50} height={50}/>
            </div>
        </div>
    );
};

export {Header};