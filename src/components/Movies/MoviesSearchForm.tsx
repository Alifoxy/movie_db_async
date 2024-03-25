import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../hooks";
import * as queryString from "querystring";
import {useEffect, useState} from "react";


const MoviesForm = () => {
    const {handleSubmit,register,reset} = useForm();
    const [query, setQuery] = useSearchParams({query:''})
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (title){
    //         setQuery(title.toString)
    //     }
    // }, [title])

    const handleChange = (event:any) => {
        setQuery('query')

    }

    const search: SubmitHandler<any> = () => {
        reset()
        navigate(`${query}`)
    };

    return (
        <form onSubmit={handleSubmit(search)}>
            <input type="text" placeholder={'search by title'} {...register('query')} onChange={handleChange}/>
            <button className={'button'} disabled={}>{'search'}</button>
        </form>
    );
};

export {MoviesForm};