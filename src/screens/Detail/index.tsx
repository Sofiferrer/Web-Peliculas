import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import { File } from './File.tsx/index';
import { Navbarr, Footer } from '../../Layout/components'
import { MovieType } from '../../types/MovieType'
import { movie } from '../../api/movie'

const Detail: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {

    const id = match.params.id;

    const [movieFile, setMovieFile] = useState<MovieType | undefined>(undefined);

    useEffect(() => {
        movie.getMovieById(id)
            .then(response => {
                setMovieFile(response)
            })
    }, []);

    return (

        <>
            <Navbarr />
            {movieFile
                ? <File peli={movieFile} />
                : 'No se encontro la pelicula'
            }
            <Footer />
        </>

    );
}

export { Detail };