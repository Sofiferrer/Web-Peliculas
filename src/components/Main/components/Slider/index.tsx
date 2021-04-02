import React, { useState, useEffect, FC } from "react";
import "./style.css"
import { Carousel } from 'react-bootstrap'
import { movie } from "../../../../api/movie"
import { MovieType } from "../../../../types/MovieType"

interface Props {
    data?: MovieType,
}

const Slider: FC<Props> = () => {
    const [movies, setMovies] = useState<MovieType[]>();

    useEffect(() => {
        movie.get().then((response) => {
            setMovies(response);
        })
    }, []);

    console.log(movies);

    // data = { production_companies, genres, production_countries, id, adult, backdrop_path, belongs_to_collection, budget, genre_ids, homepage, imdb_id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count, revenue, runtime, spoken_languages, status, tagline }

    const imgBase = "https://image.tmdb.org/t/p/"
    const imgWidth = "w500"

    return (

        <div>
            <Carousel>
                {movies && movies.map((movie: MovieType) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slider-img"
                            src={imgBase + imgWidth + movie.backdrop_path}
                            alt="Imagen"
                        />
                        <Carousel.Caption>
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
                }
            </Carousel>
        </div>
    );
}

export { Slider };