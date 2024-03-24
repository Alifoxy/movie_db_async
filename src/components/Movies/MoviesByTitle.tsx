import React, {FC, PropsWithChildren, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../store";
import {MovieByTitle} from "./MovieByTitle";

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
                {moviesByTitle.map(movie => <MovieByTitle key={movie.id} Movie={movie}/>)}
            </div>
        </div>
    );
};

export {GetMoviesByTitle};

