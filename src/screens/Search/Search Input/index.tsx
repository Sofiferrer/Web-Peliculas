import React, { ChangeEvent, FC, useState } from "react"
import './style.css'
import { api } from '../../../api';
import noImg from '../../../img/image-not-available.png'
import { MovieType } from '../../../types/MovieType';
import { Card, ListGroup } from 'react-bootstrap'


const SearchInput: FC = () => {

    const [query, setQuery] = useState("")
    const [searchMovies, setSearchMovies] = useState<MovieType[]>();

    const getSearch = async (query: string): Promise<MovieType[]> => {
        const { data } = await api.get('search/movie?query=' + query)
        console.log(data.results)
        setSearchMovies(data.results);
        return (data.results);
    };

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value)
        getSearch(query);
        // console.log(e.target.value)
    }

    const imgBase = "https://image.tmdb.org/t/p/"
    const imgWidth = "w1280"

    return (
        <div>
            <div className="search-screen">
                <div className="search-input">
                    <input type="text" name="buscador" className="search-input" id="buscador" value={query} onChange={onChange} placeholder="Buscar"></input>
                </div>
                <div className="cards-container">
                    {searchMovies && searchMovies.map((movie: MovieType) => (
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
                    ))
                    }
                </div>
            </div>
        </div>
    )

}

export { SearchInput };
