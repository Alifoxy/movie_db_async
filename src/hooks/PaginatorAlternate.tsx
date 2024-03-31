import {FC, PropsWithChildren, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./reduxHooks";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {moviesActions} from "../store";

interface IProps extends PropsWithChildren {
}

const PaginatorAlternate: FC<IProps> = () => {
    const {current_page, total_pages} = useAppSelector(state => state.movies);
    const [query, setQuery]= useSearchParams({page: '1'})
    const {page} = useParams()

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(moviesActions.getAll({page}))

    }, [query, page, dispatch])

    const prev = () => {
        setQuery(query_page => {
            query_page.set('page', (current_page - 1).toString())
            return query_page
        })
        navigate(`${current_page - 1}`)
    }

    const next = () => {
        setQuery(query_page => {
            query_page.set('page', (current_page + 1).toString())
            return query_page
        })
        navigate(`${current_page + 1}`)
    }

    return (
        <div className={'pagination_block'}>
            <button disabled={current_page === 1} onClick={prev} className={'button'}>prev</button>
            <button disabled={current_page === total_pages} onClick={next} className={'button'}>next</button>
        </div>
    );
};
export {PaginatorAlternate}
