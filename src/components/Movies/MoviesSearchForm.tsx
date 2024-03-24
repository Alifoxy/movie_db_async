import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../store";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
// import {useSearchParams} from "react-router-dom";
// import {useEffect} from "react";


const MoviesForm = () => {
    const {handleSubmit} = useForm();
    const [title, setTitle] = useState()
    const [query, setQuery] = useSearchParams({query:''})
    const navigate = useNavigate();

    const handleChange = (event:any) => {
        setTitle(event.target.value);
    }

    const search: SubmitHandler<any> = () => {
        query.set('query', title.toString())
        navigate(`${query}`)
    };

    return (
        <form onSubmit={handleSubmit(search)}>
            <input type="text" placeholder={'write your title'} value={title} onChange={handleChange}/>
            <button className={'button'}>{'search'}</button>
        </form>
    );
};

export {MoviesForm};