import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IPoster} from "../../interfaces";
import {Poster} from "./Poster";
import {movieService} from "../../services";

interface IProps extends PropsWithChildren {
    movieID:number
}

const Posters: FC<IProps> = ({movieID}) => {
    const [moviePoster, setMoviePoster] = useState<IPoster[]>([])

    let movie_id = movieID;

    useEffect( () => {
        movieService.getMoviePosters(movie_id).then(({data}) => setMoviePoster(data.posters))
    }, [movie_id])


    return (
        <Poster MoviePoster={moviePoster}/>
    );
};

export {Posters};