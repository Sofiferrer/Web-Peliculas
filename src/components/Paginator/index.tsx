import React, { FC, useState, useEffect } from 'react'
import './style.css'
import { movie } from '../../api'
import { GetMoviesResponse } from '../../api/movie'
import { Pagination } from 'react-bootstrap'
import { useHistory } from 'react-router'

interface Props {
    totPages: number | undefined,
}

const Paginator: FC<Props> = ({ totPages }) => {

    // const [moviesData, setMoviesData] = useState<GetMoviesResponse>();
    // const [totalPages, setTotalPages] = useState<number>(totPages);
    const [page, setPage] = useState<number>(1);
    // const startPaginationDefault: number = 2;
    const [startPagination, setStartPagination] = useState<number>(2);
    const [endPagination, setEndPagination] = useState<number>();
    const history = useHistory();

    // useEffect(() => {
    //     movie.getLatestData()
    //         .then((response) => {
    //             console.log(response)
    //             setMoviesData(response)
    //             setTotalPages(response.total_pages)
    //         })
    // }, []);

    useEffect(() => {
        setStartPagination(() => {
            return page! > 1 ? page! - 1 : page + 1
        })

        setEndPagination(() => {
            return page! > startPagination ? page! + 2 : page
        })
    }, [history, page, startPagination])

    useEffect(() => {
        history.push(`${page}`)
    }, [page, history])

    return (
        <div className='paginator-container'>
            {(Array(totPages))}
            <Pagination>
                <Pagination.Prev onClick={() => setPage(page! > 1 ? page! - 1 : page)} />
                <Pagination.Item onClick={() => setPage(1)}>{1}</Pagination.Item>
                <Pagination.Ellipsis />
                {Array.from(Array(totPages).keys()).slice(startPagination, endPagination).map((index) => {
                    return <Pagination.Item onClick={() => setPage(index)}>{index}</Pagination.Item>
                })}
                <Pagination.Ellipsis />
                <Pagination.Item onClick={() => setPage(totPages!)}>{totPages}</Pagination.Item>
                <Pagination.Next onClick={() => setPage(page! < totPages! ? page! + 1 : page)} />
            </Pagination>
        </div>
    )
}

export { Paginator };