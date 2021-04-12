import React, { useState, useEffect, FC } from "react"
import './style.css';
import { movie } from '../../../api/movie'
import { MovieType } from '../../../types/MovieType'
import { GetMoviesResponse } from '../../../api/movie'
import { Card, ListGroup } from 'react-bootstrap'
import { Pagination } from 'react-bootstrap'
import ReactPaginate from "react-paginate"

interface Props {
    data?: MovieType,
}

const Prueba: FC<Props> = () => {

    //     const [moviesData, setMoviesData] = useState<GetMoviesResponse>();
    //     const [totalPages, setTotalPages] = useState<number>()

    //     useEffect(() => {
    //         movie.getLatestData()
    //             .then((response) => {
    //                 setMoviesData(response)
    //                 setTotalPages(response.total_pages)
    //             })
    //     }, []);

    //     const [arrayItems, setArrayItems] = useState<number[]>([]);

    //     useEffect(() => {
    //         let myPagesArray: number[] = []
    //         if (totalPages) {
    //             for (let number = 1; number <= totalPages; number++) {
    //                 myPagesArray.push(number);
    //             }
    //             setArrayItems(myPagesArray)
    //         }

    //     }, [totalPages]);

    //     useEffect(() => {
    //         if (arrayItems) {
    //             for (let page of arrayItems) {
    //                 movie.getLatest(page).then((response) => {
    //                     console.log(response)
    //                 })
    //             }
    //         }

    //     }, []);

    //     let pagesArray = []
    //     for (let pag of arrayItems) {
    //         pagesArray.push(<Pagination.Item  onClick={(event) => handleCLick}><a value={pag}>{pag}</a></Pagination.Item>)
    //     }

    //     const [pagNumber, setPagNumber] = useState(0)
    //     const handleCLick = (event: React.FormEvent<HTMLElement>) => {
    //         event.preventDefault();
    //         setPagNumber(event.target.value)
    //     }
    // }
    // console.log(pagNumber)

    // const imgBase = "https://image.tmdb.org/t/p/"
    // const imgWidth = "w500"


    // const displayCards = (pagNumber) => {
    //     const [lastMovies, setLastMovies] = useState<MovieType[]>();

    //     useEffect(() => {
    //         movie.getLatest(pagNumber).then((response) => {
    //             setLastMovies(response);
    //         })

    //         {
    //             lastMovies && lastMovies.map((movie: MovieType) => (
    //                 <div className="card-frame">
    //                     <a href={"/ficha/" + movie.id}>
    //                         <Card className="card">
    //                             <Card.Img variant="top" className="card-img" src={imgBase + imgWidth + movie.poster_path} />
    //                             <Card.Body>
    //                                 <Card.Title className="card-title">{movie.title}</Card.Title>
    //                                 <ListGroup.Item className="card-footer">VER FICHA</ListGroup.Item>
    //                             </Card.Body>
    //                         </Card>
    //                     </a>
    //                 </div>
    //             ))
    //         }

    //     }, []);
    // }


    return (
        <div className="latest-screen">
            {/* <h2>NUEVOS LANZAMIENTOS</h2>
        <div className="cards-container">
            {displayCards}
        </div>
        <div className='paginator-container'>
            <Pagination>
                <Pagination.Prev />
                <Pagination>{pagesArray}</Pagination>
                <Pagination.Next />
            </Pagination>
        </div> */}
        </div>
    )

};

export { Prueba };