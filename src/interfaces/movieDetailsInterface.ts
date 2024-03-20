export interface IMovieDetails{
    id: number;
    imdb_id:string;
    title: string;
    poster_path: string;
    genres:[{
        id:number;
        name:string;
    }];
    tagline:string;
    original_language:string;
    overview:string;
    production_companies:[{
        name:string;
    }];
    production_countries:[{
        name:string;
    }];
    budget:number;
    release_date:string;
    runtime:number;
    vote_average: number;

}
