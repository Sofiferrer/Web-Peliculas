import React, { FC, useState, useEffect } from "react";
import { Layout } from '../../Layout'
import { movie } from '../../api/movie'
import { Cards, Paginator } from "../../components";
import { RouteComponentProps } from "react-router";
import { MovieType } from '../../types/MovieType'


const Popular: FC<RouteComponentProps<{ pag: string }>> = ({ match }) => {

    const page = parseInt(match.params.pag)
    const [totalPages, setTotalPages] = useState<number>();
    const [popularMovies, setPopularMovies] = useState<MovieType[]>();

    useEffect(() => {
        movie.getPopularData()
            .then((response) => {
                console.log(response)
                setTotalPages(response.total_pages)
            })
    }, []);

    useEffect(() => {
        movie.getPopular(page).then((response) => {
            setPopularMovies(response);
        })
    }, [page])

    return (
        <div>
            <Layout>
                <h2 style={{ textAlign: 'center', marginTop: '5vh' }}>LAS MAS POPULARES</h2>
                <Cards pag={page}
                    moviesList={popularMovies} />
                <Paginator totPages={totalPages} />
            </Layout>
        </div>
    );

}

export { Popular };