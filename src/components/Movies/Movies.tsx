import {ChangeEvent, FC, PropsWithChildren, useEffect} from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import {Movie} from "./Movie";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../store";
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import {ThemeProvider} from "@mui/material";


interface IProps extends PropsWithChildren {
}


const Movies: FC<IProps> = () => {
    const {movies,current_page, total_pages} = useAppSelector(state => state.movies);
    const [query, setQuery]= useSearchParams({page: '1'})
    const {page} = useParams()
    
    const dispatch = useAppDispatch();

    const navigate = useNavigate();


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

    const theme = createTheme({
        components:{

        },
        palette:{
            primary:{
                main:'#f3aa00',
                // #ffbc28
                contrastText: 'white',

            }
        }
    });




    return (
        <ThemeProvider theme={theme}>
            <div className={'main_block'}>
                <div className={'movies_block'}>
                    {movies.map(movie => <Movie key={movie.id} Movie={movie}/>)}
                </div>
                <div className={'pagination_block'}>
                    <Stack spacing={2} >
                        <Pagination count={total_pages} page={current_page} color='primary' size="large" className={'pag'}  onChange={handleChange}/>
                    </Stack>
                </div>
            </div>
        </ThemeProvider>

    );
};

export {Movies};