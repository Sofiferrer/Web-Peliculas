import React, { FC, useState, useEffect } from 'react';
import './style.css'
import { movie } from '../../../api'
import { VideoType } from '../../../types/VideoType'
import { MovieType } from '../../../types/MovieType';
import { Genre } from '../../../types/MovieType'
import noImg from '../../../img/image-not-available.png'

interface Props {
    peli: MovieType,
}

const File: FC<Props> = ({ peli }) => {

    const [video, setVideo] = useState<VideoType | undefined>();

    useEffect(() => {
        movie.getVideo(`${peli.id}`)
            .then(response => {
                setVideo(response)
            })
    }, [peli.id]);
    console.log(peli);
    console.log(video);

    const imgBase = "https://image.tmdb.org/t/p/"
    const posterWidth = "w500"
    const backgrounWidth = "original"
    const videoBase = "https://www.youtube.com/watch?v="

    return (
        <div className="detail-screen" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${peli.backdrop_path ? imgBase + backgrounWidth + peli.backdrop_path : noImg})`,
        }}>
            <div className="container">
                <div className="poster">
                    <div className="poster-img" style={{
                        backgroundImage: `url(${peli.poster_path ? imgBase + posterWidth + peli.poster_path : noImg})`,
                    }}>
                    </div>
                </div>
                <div className="info">
                    <div className="header">
                        <h2>{peli.title}<span>{peli.release_date.split('-', 1)}</span></h2>
                        {video?.results[0] ? <a target="_blank" rel="noreferrer"
                            href={videoBase + video?.results[0].key!}><span>Ver Trailer</span></a> : <span>No hay trailer disponible</span>}
                    </div>
                    <div className="content">
                        <h6>SINAPSIS</h6>
                        <p>{peli.overview}</p>
                    </div>
                    <div className="gender">
                        <h6>GENEROS</h6>
                        <ul>
                            {peli.genres && peli.genres.map((genre: Genre) => (
                                <li key={genre.name}>
                                    {genre.name}
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { File };