import { Genre } from "./Genre";

export interface IMovie {
    id: number;
    title: string;
    country: string;
    image: string|null;
    year: number;
    vod: string;
    director: string;
    actors: string;
    imdb: number|null;
    duraction: number;
    description: string;
    premier_date: Date|null;
    genres: Array<Genre>;
    gallery: Array<string>|null;
}

export class Movie implements IMovie {
    constructor(
        public id: number,
        public title: string,
        public country: string,
        public image: string|null,
        public year: number,
        public vod: string,
        public director: string,
        public actors: string,
        public imdb: number|null,
        public duraction: number,
        public description: string,
        public premier_date: Date|null,
        public genres: Array<Genre> = [],
        public gallery: Array<string>|null = null,
        ) {}
}

export class MovieFactory {
    createMovie(
        id: number,
        title: string,
        country: string,
        image: string|null,
        year: number,
        vod: string,
        director: string,
        actors: string,
        imdb: number|null,
        duraction: number,
        description: string,
        premier_date: Date|null,
        genres: Array<Genre>,
        gallery: Array<string>|null = null,
    ): IMovie
    {
        return new Movie(
            id,
            title,
            country,
            image,
            year,
            vod,
            director,
            actors,
            imdb,
            duraction,
            description,
            premier_date,
            genres,
            gallery
        )
    }
}