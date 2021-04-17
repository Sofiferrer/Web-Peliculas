import React, { FC, useState, useEffect } from 'react'
import './style.css'
import { movie } from '../../api'
import { GetMoviesResponse } from '../../api/movie'
import { Pagination } from 'react-bootstrap'
import { useHistory } from 'react-router'

interface Props {
    pag: number
}

const Paginator: FC<Props> = ({ pag }) => {

    const [moviesData, setMoviesData] = useState<GetMoviesResponse>();
    const [totalPages, setTotalPages] = useState<number>();
    const [page, setPage] = useState<number>(pag);
    const startPaginationDefault: number = 2;
    const [startPagination, setStartPagination] = useState<number>(2);
    const [endPagination, setEndPagination] = useState<number>();
    const history = useHistory();



    useEffect(() => {
        movie.getLatestData()
            .then((response) => {
                console.log(response)
                setMoviesData(response)
                setTotalPages(response.total_pages)
            })
    }, []);

    useEffect(() => {
        setStartPagination(() => {
            return page! > 1 ? page! - 1 : startPaginationDefault
        })
        // console.log(startPagination)

        setEndPagination(() => {
            return page! <= 1 ? page! + 1 : page
        })
        // console.log(endPagination)

        
        console.log(page)
    }, [history, page, startPagination])

    useEffect(() => {
        history.push(`/nuevas/${page}`)
    }, [page, history])

    return (
        <div className='paginator-container'>
            {(Array(moviesData?.total_pages))}
            <Pagination>
                <Pagination.Prev onClick={() => setPage(page! > 1 ? page! - 1 : page)} />
                <Pagination.Item onClick={() => setPage(1)}>{1}</Pagination.Item>
                <Pagination.Ellipsis />
                {Array.from(Array(totalPages).keys()).slice(startPagination, endPagination).map((index) => {
                    return <Pagination.Item onClick={() => setPage(index)}>{index}</Pagination.Item>
                })}
                <Pagination.Ellipsis />
                <Pagination.Item onClick={() => setPage(totalPages!)}>{totalPages}</Pagination.Item>
                <Pagination.Next onClick={() => setPage(page! < totalPages! ? page! + 1 : page)} />
            </Pagination>
        </div>
    )
}

export { Paginator };