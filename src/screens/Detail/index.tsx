import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import './style.css'
import { Navbarr } from '../../components/Layout/components/Header/components/Navbar';
import { movie } from '../../api';

const Detail: FC = () => {

    let url = new URLSearchParams(window.location.search);
    const id = url.get("id");
    const [poster, setPoster] = useState('');
    const [title, setTitle] = useState('');

    // useEffect(() => {
    //     movie.getId(id)
    //         .then(response => {
    //             setPoster(response.poster_path);
    //             setTitle(response.title);
    //         })
    // });

    return (
        <div className="detail-screen">
            <Navbarr />
            <div className="container">
                <div className="card">
                    <div className="poster">
                        <img src={"https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"} alt="Poster" />
                    </div>
                    <div className="info">
                        <div className="header">
                            <h1>TITULO<span>anio</span></h1>
                            <Button className="header-button">VER TRAILER</Button>
                        </div>
                        <div className="content">
                            <h3>SINAPSIS</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit officiis impedit dolorum assumenda ullam amet vitae laboriosam possimus rerum suscipit, delectus omnis ipsam, expedita eveniet sequi autem laudantium vel placeat?</p>
                            <br />
                            <h3>GENEROS</h3>
                            <ul>
                                <li>Genero1</li>
                                <li>Genero2</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export { Detail };