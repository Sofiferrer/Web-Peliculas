import React, { useState, useEffect, FC } from "react"
import './style.css';
import { movie } from '../../api/movie'
import { MovieType } from '../../types/MovieType'
import { GetMoviesResponse } from '../../api/movie'
import { Card, ListGroup } from 'react-bootstrap'


interface Props {
    data?: MovieType,
    pag: string,
}

const Cards: FC<Props> = ({ pag }) => {

    const [lastMovies, setLastMovies] = useState<MovieType[]>();

    useEffect(() => {
        movie.getLatest(pag).then((response) => {
            setLastMovies(response);
        })
    }, [pag])

    const imgBase = "https://image.tmdb.org/t/p/"
    const imgWidth = "w500"


    return (
        <div className="latest-screen">
            <h2>NUEVOS LANZAMIENTOS</h2>
            <div className="cards-container">
                {lastMovies && lastMovies.map((movie: MovieType) => (
                    <div className="card-frame">
                        <a href={"/ficha/" + movie.id}>
                            <Card className="page-card">
                                <Card.Img variant="top" className="card-img" src={imgBase + imgWidth + movie.poster_path} />
                                <Card.Body>
                                    <Card.Title className="card-title">{movie.title}</Card.Title>
                                    <ListGroup.Item className="card-footer">VER FICHA</ListGroup.Item>
                                </Card.Body>
                            </Card>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { Cards };