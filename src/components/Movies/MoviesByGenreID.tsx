import React, {FC, PropsWithChildren, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {MovieByGenre} from "./MovieByGenre";

interface IProps extends PropsWithChildren {
}

const GetMoviesByGenre: FC<IProps> = () => {
    const [genreMovies, setGenreMovies] = useState<IMovie[]>([])
    const {genre_id} = useParams()


    useEffect(() => {
        movieService.getMoviesByGenreID(genre_id).then(({data}) => setGenreMovies(data.results))
    }, [genre_id])

    return (
        <div className={'main_block'}>
            <div className={'movies_block'}>
                {genreMovies.map(movie => <MovieByGenre key={movie.id} Movie={movie}/>)}
            </div>
        </div>
    );
};

export {GetMoviesByGenre};