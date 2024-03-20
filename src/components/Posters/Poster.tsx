import {FC, PropsWithChildren} from "react";
import {IPoster} from "../../interfaces";

interface IProps extends PropsWithChildren {
    MoviePoster:IPoster[]
}

const Poster: FC<IProps> = ({MoviePoster,}) => {

    const poster_link = MoviePoster.map(function (item){
        return item.file_path
    })
    const set_link = (poster_link.slice(1)[0])

    console.log(set_link)


    return (
            <img  className={'det_poster'} src={`https://image.tmdb.org/t/p/original${set_link}`} alt={'poster'}/>
    );
};

export {Poster};