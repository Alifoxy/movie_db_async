import {FC, PropsWithChildren, useEffect} from "react";
import {Poster} from "./Poster";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {postersActions} from "../../store";

interface IProps extends PropsWithChildren {
    movieID:number
}

const Posters: FC<IProps> = ({movieID}) => {
    const {posters} = useAppSelector(state => state.posters);
    const dispatch = useAppDispatch();

    const movie_id = movieID;

    useEffect( () => {
        dispatch(postersActions.getPosters({movie_id}))
    }, [dispatch, movie_id])


    return (
        <Poster MoviePoster={posters}/>
    );
};

export {Posters};