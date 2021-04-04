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
        movie.getLatest().then((response) => {
            setMovies(response);
        })
    }, []);

    const topMovies = movies && movies.filter(movie => movie.vote_average >= 7.5)

    const imgBase = "https://image.tmdb.org/t/p/"
    const imgWidth = "w1280"

    return (

        <div>
            <Carousel>
                {topMovies && topMovies.map((movie: MovieType) => (
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