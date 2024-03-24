import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate, useSearchParams} from "react-router-dom";


const MoviesForm = () => {
    const {handleSubmit,register} = useForm();
    const [query, setQuery] = useSearchParams({query:''})
    const navigate = useNavigate();

    const handleChange = (event:any) => {
        setQuery(event.target.value);
    }

    const search: SubmitHandler<any> = (event:any) => {
        navigate(`${query}`)
    };

    return (
        <form onSubmit={handleSubmit(search)}>
            <input type="text" placeholder={'write your title'} {...register('query')} onChange={handleChange}/>
            <button className={'button'}>{'search'}</button>
        </form>
    );
};

export {MoviesForm};