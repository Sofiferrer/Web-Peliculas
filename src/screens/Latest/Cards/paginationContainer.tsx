import React, { FC, useState, useEffect } from 'react'
import { movie } from '../../../api'
import { GetMoviesResponse } from '../../../api/movie'
import { Pagination } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
//import { Pagination } from './paginationComponent';

// interface Props {
//     page: number;
//     totalPages: number;
//     handlePagination: (page: number) => void;
// }


const PaginationContainer: FC = () => {

    const [moviesData, setMoviesData] = useState<GetMoviesResponse>();
    const [totalPages, setTotalPages] = useState<number>()
    const [page, setPage] = useState(1);

    useEffect(() => {
        movie.getLatestData()
            .then((response) => {
                setMoviesData(response)
                setTotalPages(response.total_pages)
            })
    }, []);

    // console.log(moviesData)

    const [arrayItems, setArrayItems] = useState<number[]>([]);

    useEffect(() => {
        let myPagesArray: number[] = []
        if (totalPages) {
            for (let number = 1; number <= totalPages; number++) {
                myPagesArray.push(number);
            }
            setArrayItems(myPagesArray)
        }

    }, [totalPages]);

    //console.log(items)

    useEffect(() => {
        if (arrayItems) {
            for (let page of arrayItems) {
                movie.getLatest(page).then((response) => {
                    console.log(response)
                })
            }
        }

    }, []);

    let pagesArray = []
    for (let pag of arrayItems) {
        pagesArray.push(<Pagination.Item>{pag}</Pagination.Item>)
    }

    return (
        <div className='paginator-container'>
            {console.log(Array(moviesData?.total_pages))}
            <Pagination>
                <Pagination.Prev onClick={() => setPage(page - 1)} />
                <Pagination.Ellipsis />
                {Array(moviesData?.total_pages).slice(page, page + 10).map(index => {
                    <Pagination.Item>{index}</Pagination.Item>
                })}
                {/* <Pagination>{pagesArray}</Pagination> */}
                <Pagination.Ellipsis />
                <Pagination.Item>{moviesData?.total_pages}</Pagination.Item>
                <Pagination.Next onClick={() => setPage(page + 1)} />
            </Pagination>
        </div>
    )
}

export { PaginationContainer };