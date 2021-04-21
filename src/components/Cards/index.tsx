import React, { FC } from "react"
import './style.css';
import noImg from '../../img/image-not-available.png'
import { MovieType } from '../../types/MovieType'
import { Card, ListGroup } from 'react-bootstrap'

interface Props {
    pag: number;
    moviesList: MovieType[] | undefined;
}

const Cards: FC<Props> = ({ moviesList }) => {

    const imgBase = "https://image.tmdb.org/t/p/"
    const imgWidth = "w500"


    return (
        <div className="cards-container">
            {moviesList && moviesList.map((movie: MovieType) => (
                <div className="card-frame">
                    <a href={"/ficha/" + movie.id}>
                        <Card className="card">
                            <Card.Img variant="top" className="card-img" src={movie.poster_path ? imgBase + imgWidth + movie.poster_path : noImg} />
                            <Card.Body>
                                <Card.Title className="card-title">{movie.title}</Card.Title>
                                <ListGroup.Item className="card-footer">VER FICHA</ListGroup.Item>
                            </Card.Body>
                        </Card>
                    </a>
                </div>
            ))}
        </div>
    )
}

export { Cards };