import React, {FC, PropsWithChildren, useEffect} from "react";
import {Genre} from "./Genre";
import {genresActions} from "../../store";
import {useAppDispatch, useAppSelector} from "../../hooks";

interface IProps extends PropsWithChildren {
}

const GetGenres: FC<IProps> = () => {
    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(genresActions.getGenres())
    }, [dispatch])

    return (
        <div className={'genres_block'}>
            <h3 className={'gen_title'}>Get Movies By Genre</h3>
            <div className={'inner_gen_block'}>
                {genres.map(genre => <Genre key={genre.id} SetGenre={genre}/>)}
            </div>
        </div>
    );
};

export {GetGenres};