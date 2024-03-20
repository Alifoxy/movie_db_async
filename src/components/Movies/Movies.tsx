import {FC, PropsWithChildren, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {Movie} from "./Movie";
import {useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {
}


const Movies: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [currentPage, setCurrentPage] = useState({current_page:0});
    const [totalPages] = useState({total_pages:500});
    const [query, setQuery]= useSearchParams({page: '1'})

    const navigate = useNavigate();

    const getPage = query.get('page')
    const setPage: string = getPage !== null? getPage:'';


    useEffect(() => {
        movieService.getAll(setPage).then(({data}) => {
            setMovies(data.results)
            setCurrentPage({current_page:data.page})
        })
    }, [query, setPage])

    const prev = () => {
        setQuery(current_page => {
            const getCurrent = current_page.get('page')
            const setCurrent: string = getCurrent !== null? getCurrent:'';
            current_page.set('page', (+setCurrent - 1).toString())
            return current_page
        })
        navigate(`${currentPage.current_page - 1}`)
    }

    const next = () => {
        setQuery(current_page => {
            const getCurrent = current_page.get('page')
            const setCurrent: string = getCurrent !== null? getCurrent:'';
            current_page.set('page', (+setCurrent + 1).toString())
            return current_page
        })
        navigate(`${currentPage.current_page + 1}`)
    }

    return (
        <div className={'main_block'}>
            <div className={'movies_block'}>
                {movies.map(movie => <Movie key={movie.id} Movie={movie} page={currentPage.current_page}/>)}
            </div>
            <div className={'pagination_block'}>
                <button disabled={currentPage.current_page === 1} onClick={prev} className={'button'}>prev</button>
                <button disabled={currentPage.current_page === totalPages.total_pages} onClick={next} className={'button'}>next</button>
            </div>
        </div>
    );
};

export {Movies};