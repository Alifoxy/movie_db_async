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
            <h4 className={'gen_title'}>Here you can find movies by genre or title</h4>
            <div className={'inner_gen_block'}>
                <div className={'genres'}>
                    {genres.map(genre => <Genre key={genre.id} SetGenre={genre}/>)}
                </div>
            </div>
        </div>
    );
};

export {GetGenres};