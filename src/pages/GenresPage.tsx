import {GetGenres} from "../components";
import {Outlet} from "react-router-dom";

const GenresPage = () => {
    return (
        <div>
            <GetGenres/>
            <Outlet/>
        </div>
    );
};

export {GenresPage};