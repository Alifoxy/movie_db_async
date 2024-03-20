import React, {FC, PropsWithChildren} from "react";
import {IGenre} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    SetGenre:IGenre

}
const Genre: FC<IProps> = ({SetGenre}) => {
    const {name:genre_name, id:genre_id} = SetGenre;

    const toGetMov = () => {
        navigate(`${genre_id}/${genre_name}`)
    };

    const navigate = useNavigate()

    return (
        <div>
            <button className={'genre_item genre_item_button'} onClick={toGetMov}>
                {genre_name}
            </button>
        </div>
    );
};

export {Genre};