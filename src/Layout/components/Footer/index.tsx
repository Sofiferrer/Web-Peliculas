import React, { FC } from "react";
import "./style.css"
import Prueba from '../../../img/film.png'

const Footer: FC = () => {
    return (
        <div className="footer-container">
            <div className="footer-contain">
                <div>
                    <img src={Prueba} alt="Foto" className="footer-img" />
                </div>
                <div className="footer-text">
                    <p>MOVIE APP</p>
                </div>
            </div>
        </div>
    );
}

export { Footer };