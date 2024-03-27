import {ChangeEvent, FC, PropsWithChildren, useEffect} from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {Movie} from "./Movie";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../store";
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

interface IProps extends PropsWithChildren {
}


const Movies: FC<IProps> = () => {
    const {movies,current_page, total_pages} = useAppSelector(state => state.movies);
    const [query, setQuery]= useSearchParams({page: '1'})
    const {page} = useParams()
    
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    // const getPage = query.get('page')
    // const setpage: string = getPage !== null? getPage:'';


    useEffect(() => {
        dispatch(moviesActions.getAll({page}))

    }, [query, page, dispatch])


    const handleChange = (event:ChangeEvent<unknown> , value:number) => {
       let current_page = value
        setQuery(query_page => {
            query_page.set('page', current_page.toString())
            return query_page
        })
        navigate(`${current_page}`)
    };


    // const prev = () => {
    //     setQuery(query_page => {
    //         // const getCurrent = query_page.get('page')
    //         // const setCurrent: string = getCurrent !== null? getCurrent:'';
    //         query_page.set('page', (current_page - 1).toString())
    //         return query_page
    //     })
    //     navigate(`${current_page - 1}`)
    // }
    //
    // const next = () => {
    //     setQuery(query_page => {
    //         // const getCurrent = current_page.get('page')
    //         // const setCurrent: string = getCurrent !== null? getCurrent:'';
    //         query_page.set('page', (current_page + 1).toString())
    //         return query_page
    //     })
    //     navigate(`${current_page + 1}`)
    // }

    return (
        <div className={'main_block'}>
            <div className={'movies_block'}>
                {movies.map(movie => <Movie key={movie.id} Movie={movie}/>)}
            </div>
            <div className={'pagination_block'}>
                {/*<button disabled={current_page === 1} onClick={prev} className={'button'}>prev</button>*/}
                {/*<button disabled={current_page === total_pages} onClick={next} className={'button'}>next</button>*/}
                <Stack spacing={2}>
                    <Pagination count={total_pages} page={current_page} color='primary' onChange={handleChange} />
                </Stack>
            </div>
        </div>
    );
};

export {Movies};