import React, { useState, useEffect, FC } from "react";
import './style.css';
import { movie } from '../../../api/movie'
import { MovieType } from '../../../types/MovieType';
import { Card, ListGroup } from 'react-bootstrap'
import { GetMoviesResponse } from '../../../api/movie'


interface Props {
    data?: MovieType,
}

const Cards: FC<Props> = () => {

    // const [moviesData, setMoviesData] = useState<GetMoviesResponse>();
    // const [totalPages, setTotalPages] = useState<number>()
    // const [page, setPage] = useState(1);
    // const startPaginationDefault: number = 2;
    // const [startPagination, setStartPagination] = useState<number>(2)
    // const [endPagination, setEndPagination] = useState<number>(startPaginationDefault + 2);



    // useEffect(() => {
    //     movie.getLatestData()
    //         .then((response) => {
    //             setMoviesData(response)
    //             setTotalPages(response.total_pages)
    //         })
    // }, []);

    // useEffect(() => {
    //     setStartPagination(() => {
    //         return page > 1 ? page - 1 : startPaginationDefault
    //     })
    //     setEndPagination(() => {
    //         return page <= 1 ? page + 1 : page
    //     })
    // }, [page, totalPages])

    // const [popularMovies, setPopularMovies] = useState<MovieType[]>();

    // useEffect(() => {
    //     movie.getPopular(1).then((response) => {
    //         setPopularMovies(response);
    //     })
    // }, []);

    // const imgBase = "https://image.tmdb.org/t/p/"
    // const imgWidth = "w1280"

    return (
        <div className="popular-screen">
            {/* <h2>LAS MAS POPULARES</h2>
            <div className="cards-container">
                {popularMovies && popularMovies.map((movie: MovieType) => (
                    <div className="card-frame">
                        <a href={"/ficha/" + movie.id}>
                            <Card className="card">
                                <Card.Img variant="top" className="card-img" src={imgBase + imgWidth + movie.poster_path} />
                                <Card.Body>
                                    <Card.Title className="card-title">{movie.title}</Card.Title>
                                    <ListGroup.Item className="card-footer">VER FICHA</ListGroup.Item>
                                </Card.Body>
                            </Card>
                        </a>
                    </div>
                ))
                }
            </div>
        </div>
    )

}

export { Cards };