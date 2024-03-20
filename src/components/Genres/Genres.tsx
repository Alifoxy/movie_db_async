import React, {FC, PropsWithChildren, useEffect, useState} from "react";
import {IGenre} from "../../interfaces";
import {movieService} from "../../services";
import {Genre} from "./Genre";

interface IProps extends PropsWithChildren {
}

const GetGenres: FC<IProps> = () => {
    const [genres, setGenres] = useState<IGenre[]>([])


    useEffect(() => {
        movieService.getGenres().then(({data}) => setGenres(data.genres))
    }, [])

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