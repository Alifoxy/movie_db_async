import {GetGenres} from "../components";
import {Outlet} from "react-router-dom";
import {MoviesForm} from "../components";

const SearchPage = () => {
    return (
        <div>
            <GetGenres/>
            <MoviesForm/>
            <Outlet/>
        </div>
    );
};

export {SearchPage};