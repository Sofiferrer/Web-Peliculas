import React, { useState, useEffect, FC } from "react";
import "./style.css";
import { movie } from "../../../../api/movie"
import { MovieType } from "../../../../types/MovieType"
import { MouseEvent } from "../../../../types/MouseEventType"
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { Slider } from "../Slider";

interface Props {
    data?: MovieType,
    e?: MouseEvent,
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
        movie.getPopular(1).then((response) => {
            setPopularMovies(response);
        })
    }, []);

    const imgBase = "https://image.tmdb.org/t/p/"
    const imgWidth = "w500"

    // const list = document.querySelector('.list-style')
    // let isDown = false;
    // let startX: number;
    // let scrollLeft: number;


    // list?.addEventListener('mousedown', (e) => {
    //     let isDown = true;
    //     list.classList.add('active');
    //     startX = e.pageX - list.offsetLeft
    //     scrollLeft = list.scrollLeft;
    // });
    // list?.addEventListener('mouseleave', () => {
    //     let isDown = false;
    // });
    // list?.addEventListener('mouseup', () => {
    //     let isDown = false;
    // });
    // list?.addEventListener('mousemove', (e) => {
    //     if (!isDown) return;
    //     e.preventDefault();
    //     const x = e.pageX - list.offsetLeft;
    //     const move = x - startX;
    //     list.scrollLeft = scrollLeft - move;
    // });

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
                                    <img src={imgBase + imgWidth + movie.poster_path} alt="poster" className="list-img" />
                                    {/* <div className='list-img' style={{
                                        backgroundImage: `url(${imgBase + imgWidth + movie.poster_path})`,
                                    }}></div> */}
                                    <p>{movie.title}</p>
                                    <Button variant="info" className="list-button">ver</Button>
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
                                    <Button variant="info" className="list-button">ver</Button>
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
