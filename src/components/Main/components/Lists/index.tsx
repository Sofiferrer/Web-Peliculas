import React, { useState, useEffect, FC } from "react";
import "./style.css";
import { movie } from "../../../../api/movie"
import { MovieType } from "../../../../types/MovieType"

interface Props {
    data?: MovieType,
}

const Lists: FC = () => {

    const [movies, setMovies] = useState<MovieType[]>();

    useEffect(() => {
        movie.get().then((response) => {
            setMovies(response);
        })
    }, []);

    console.log(movies);

    return (
        <div className="lists-container">
            <div className="list">
                <div className="list-header">NUEVOS LANZAMIENTOS</div>

                <div className="movie-list">
                    <ul className="list-style">
                        {movies && movies.map((movie: MovieType) => (
                            <li><a href="#">{movie.title}</a></li>
                        ))
                        }
                    </ul>

                </div>
            </div>
            <div className="list">
                <div className="list-header">MAS POPULARES</div>

                <div className="movie-list">
                    <ul className="list-style">
                        {movies && movies.map((movie: MovieType) => (
                            <li><a href="#">{movie.title}</a></li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { Lists }