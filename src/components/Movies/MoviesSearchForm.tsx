import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";


const MoviesForm = () => {
    const {handleSubmit,reset} = useForm();
    const [,setQuery] = useSearchParams({query:''})
    const [title, setTitle]=useState('')
    const navigate = useNavigate();

    useEffect(() => {
        setQuery(title)
    }, [setQuery, title])

    const handleChange = (event:any) => {
        setTitle(event.target.value)
    }

    const search: SubmitHandler<any> = () => {
        reset()
        navigate(`${title}`)
    };

    return (
        <form onSubmit={handleSubmit(search)}>
            <input type="text" placeholder={'search by title'} value={title} onChange={handleChange}/>
            <button className={'button'} disabled={!title}>{'search'}</button>
        </form>
    );
};

export {MoviesForm};