import React, {FC, PropsWithChildren} from "react";
import {IMovieDetails} from "../../interfaces";
import {Posters} from "../Posters";
import {SetDetRating} from "../../hooks";

interface IProps extends PropsWithChildren {
    MovieDetails: IMovieDetails
}
const MovieDetails: FC<IProps> = ({MovieDetails}) => {
    const {id, imdb_id, title, tagline, budget, runtime, release_date, original_language, vote_average, overview} = MovieDetails;

    const genre_name = MovieDetails.genres.map(function(genre) {
        return <div className={'genre_item'}>{genre.name}</div>;
    });
    const country_name = MovieDetails.production_countries.map(function(country) {
        return <li>{country.name}</li>;
    });
    const company_name = MovieDetails.production_companies.map(function(company) {
        return <li>{company.name}</li>;

    });

    return (
        <div className={'mini_det_block'}>
            <h3 className={'det_title'}> Description</h3>
            <div className={'inner_det_block'}>

                {/*alternate way to get poster*/}
                {/*<div>*/}
                {/*    <img  className={'det_poster_div'} src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={'poster'}/>*/}
                {/*</div>*/}

                <div className={'det_poster_div'}><Posters movieID={id}/></div>
                <div className={'inner_desc_block'}>
                    <div>id: {id}</div>
                    <div>imdb id: {imdb_id}</div>
                    <div className={'movie_title'}><p>{title}</p></div>
                    <div>tagline: {tagline}</div>
                    <div className={'genres_det_block'}>{genre_name}</div>
                    <div>release date: {release_date}</div>
                    <div>production countries:
                        <ul>
                            {country_name}
                        </ul>
                    </div>
                    <div>production companies:
                        <ul>
                            {company_name}
                        </ul>
                    </div>
                    <div>budget: {budget}</div>
                    <div>runtime: {runtime}</div>
                    <div>original language: {original_language}</div>
                    <div className={'vote'}><SetDetRating rating={vote_average}/></div>
                </div>
            </div>
            <h3 className={'det_title'}> Overview</h3>
            <div className={'inner_overview_block'}>{overview}</div>
        </div>

    );
};

export {MovieDetails};