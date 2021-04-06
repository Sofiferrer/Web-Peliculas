import React, { FC, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.css'
import { movie } from '../../../api';
import { MovieType } from '../../../types/MovieType';

interface Props {
    id: string
}

const File: FC<Props> = ({ id }) => {

    const [poster, setPoster] = useState('');
    const [title, setTitle] = useState('');
    const [movieCard, setMovieCard] = useState({});

    useEffect(() => {
        if (id) {
            movie.getMovieById(id)
                .then(response => {
                    setMovieCard(response)
                })
        }
    }, []);

    console.log(movieCard);

    for (const prop in movieCard) {
        console.log(prop);
    }

    //console.log(movieCard.title)

    return (
        <div className="container">
            <div className="poster">
                <div className="poster-img">
                    POSTER
                </div>
                {/* <img src={"https://image.tmdb.org/t/p/original//yHpNgjEXzZ557YiZ2r3VrKid788.jpg"} alt="Poster" /> */}
            </div>
            <div className="info">
                <div className="header">
                    <h2>TITLE<span>anio</span></h2>
                    <Link to={'video'}>
                        <span>
                            Ver Trailer
                                </span>
                    </Link>
                    {/* <Button className="header-button">VER TRAILER</Button> */}
                </div>
                <div className="content">
                    <h6>SINAPSIS</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit officiis impedit dolorum assumenda ullam amet vitae laboriosam possimus rerum suscipit, delectus omnis ipsam, expedita eveniet sequi autem laudantium vel placeat?</p>
                </div>
                <div className="gender">
                    <h6>GENEROS</h6>
                    <ul>
                        <li>Genero1</li>
                        <li>Genero2</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export { File };