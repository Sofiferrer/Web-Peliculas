import React, { useState, useEffect, FC } from "react";
import "./style.css";
import { movie } from "../../../../api/movie"
import { MovieType } from "../../../../types/MovieType"
import { Button } from 'react-bootstrap'
import { Eye } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

interface Props {
    data?: MovieType,
}

const Lists: FC<Props> = () => {

    const [topRatedMovies, setTopRatedMovies] = useState<MovieType[]>();

    useEffect(() => {
        movie.getTopRated().then((response) => {
            setTopRatedMovies(response);
        })
    }, []);

    const [popularMovies, setPopularMovies] = useState<MovieType[]>();

    useEffect(() => {
        movie.getPopular().then((response) => {
            setPopularMovies(response);
        })
    }, []);

    const imgBase = "https://image.tmdb.org/t/p/"
    const imgWidth = "w500"

    return (
        <div className="lists-container">
            <div className="list">
                <div className="list-header">
                    MEJORES PUNTUADAS
                </div>
                <div className="movie-list">
                    <ul className="list-style">
                        {topRatedMovies && topRatedMovies.map((movie: MovieType) => (
                            <li>
                                <Link to={`/ficha/${movie.id}`}>
                                    <img src={imgBase + imgWidth + movie.poster_path} alt="Avatar" className="list-img" />
                                    <p>{movie.title}</p>
                                    <Button variant="info" className="list-button"><Eye /></Button>
                                </Link>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
            <div className="list">
                <div className="list-header">
                    MAS POPULARES
                </div>
                <div className="movie-list">
                    <ul className="list-style">
                        {popularMovies && popularMovies.map((movie: MovieType) => (
                            <li>
                                <Link to={`/ficha/${movie.id}`}>
                                    <img src={imgBase + imgWidth + movie.poster_path} alt="Avatar" className="list-img" />
                                    <p>{movie.title}</p>
                                    <Button variant="info" className="list-button"><Eye /></Button>
                                </Link>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { Lists }