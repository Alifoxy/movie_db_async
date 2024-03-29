import React, {FC, PropsWithChildren, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../store";
import {MovieByParams} from "./MovieByParams";
import {isFulfilled} from "@reduxjs/toolkit";

interface IProps extends PropsWithChildren {
}

const GetMoviesByTitle: FC<IProps> = () => {
    const {moviesByTitle} = useAppSelector(state => state.movies)
    const {query} = useParams()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(moviesActions.getMoviesByTitle({query}))
    }, [dispatch, query])

    const byTitle = () => {
        let movies
        if (!moviesByTitle.length){
            movies =  <h2 className={'error_title'}>Sorry, we were unable to find movies with title {query} :(</h2>
        }else {
            movies = moviesByTitle.map(movie => <MovieByParams key={movie.id} Movie={movie}/>)
        }
        return movies
    }

    return (
        <div className={'main_block'}>
            <div className={'movies_block'}>
                {byTitle()}
            </div>
        </div>
    );
};

export {GetMoviesByTitle};

