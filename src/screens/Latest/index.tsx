import React, { FC, useEffect, useState } from "react";
import { Layout } from '../../Layout'
import { movie } from '../../api/movie'
import { GetMoviesResponse } from '../../api/movie'
import { Paginator, Cards } from '../../components'
import { RouteComponentProps } from "react-router";
import { MovieType } from '../../types/MovieType'


const Latest: FC<RouteComponentProps<{ pag: string }>> = ({ match }) => {

    const page = parseInt(match.params.pag)
    const [totalPages, setTotalPages] = useState<number>();
    const [lastMovies, setLastMovies] = useState<MovieType[]>();

    useEffect(() => {
        movie.getLatestData()
            .then((response) => {
                console.log(response)
                setTotalPages(response.total_pages)
            })
    }, []);

    useEffect(() => {
        movie.getLatest(page).then((response) => {
            setLastMovies(response);
        })
    }, [page])

    return (
        <div>
            <Layout>
                <h2 style={{ textAlign: 'center', marginTop: '5vh' }}>ULTIMOS LANZAMIENTOS</h2>
                <Cards pag={page}
                    moviesList={lastMovies} />
                <Paginator totPages={totalPages} />
            </Layout>
        </div>
    );

}

export { Latest };