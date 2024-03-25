import React, {FC, PropsWithChildren, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../store";
import {MovieByParams} from "./MovieByParams";

interface IProps extends PropsWithChildren {
}

const GetMoviesByTitle: FC<IProps> = () => {
    const {moviesByTitle} = useAppSelector(state => state.movies)
    const {query} = useParams()
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(moviesActions.getMoviesByTitle({query}))
    }, [dispatch, query])



    return (
        <div className={'main_block'}>
            <div className={'movies_block'}>
                {moviesByTitle.map(movie => <MovieByParams key={movie.id} Movie={movie}/>)}
                <h3>Sorry, we could not find movies with title {query}</h3>
            </div>
        </div>
    );
};

export {GetMoviesByTitle};

