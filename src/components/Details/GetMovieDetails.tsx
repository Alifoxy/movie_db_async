import {FC, PropsWithChildren, useEffect} from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {MovieDetails} from "./MovieDetails";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../store";

interface IProps extends PropsWithChildren {
}

const GetMovieDetails: FC<IProps> = () => {
    const {movieByID} = useAppSelector(state => state.movies);
    const {movie_id} = useParams()
    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const set_movie_id: string = movie_id !== undefined? movie_id:'';

    useEffect(() => {
        dispatch(moviesActions.getById({movie_id:+set_movie_id}))
    }, [dispatch, set_movie_id])

    const back = () => {
        navigate(-1)
    }

    return (
        <div className={'main_det_block'}>
            <div><button onClick={back} className={'button'}> {'<< Back'} </button></div>
            <div>{movieByID && <MovieDetails MovieDetails={movieByID}/>}</div>
        </div>
    );
};

export {GetMovieDetails};