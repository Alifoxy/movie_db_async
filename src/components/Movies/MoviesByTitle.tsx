import React, {FC, PropsWithChildren, useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../store";
import {MovieByGenre} from "./MovieByGenre";

interface IProps extends PropsWithChildren {
}

const GetMoviesByTitle: FC<IProps> = () => {
    const {moviesByTitle} = useAppSelector(state => state.movies)
    const {title} = useAppSelector(state => state.movies)
    const [query, setQuery] = useSearchParams({query:''})
    const dispatch = useAppDispatch()

    query.set('query', title.toString())

    useEffect(() => {
        dispatch(moviesActions.getMoviesByTitle({query}))
    }, [dispatch, query])





    return (
        <div className={'main_block'}>
            <div className={'movies_block'}>
                {moviesByTitle.map(movie => <MovieByGenre key={movie.id} Movie={movie}/>)}
            </div>
        </div>
    );
};

export {GetMoviesByTitle};

