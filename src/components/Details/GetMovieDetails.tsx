import {FC, PropsWithChildren, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {IMovieDetails} from "../../interfaces";
import {movieService} from "../../services";
import {MovieDetails} from "./MovieDetails";

interface IProps extends PropsWithChildren {
}

const GetMovieDetails: FC<IProps> = () => {
    const [movieDetails, setMovieDetails] = useState<IMovieDetails>()
    const {movie_id} = useParams()

    const navigate = useNavigate();

    const set_movie_id: string = movie_id !== undefined? movie_id:'';

    useEffect(() => {
        movieService.getById(+set_movie_id).then(({data}) => setMovieDetails(data))
    }, [movie_id, set_movie_id])

    const back = () => {
        navigate(-1)
    }

    return (
        <div className={'main_det_block'}>
            <div><button onClick={back} className={'button'}> {'<< Back'} </button></div>
            <div>{movieDetails && <MovieDetails MovieDetails={movieDetails}/>}</div>
        </div>
    );
};

export {GetMovieDetails};