import React, { FC } from "react";
import "./style.css"

const Footer: FC = () => {
    return (
        <div className="footer-container">
            <div className="footer-contain">
                <div className="footer-text">
                    <p>MOVIE APP     Desarrollada por </p>
                    <a target="_blank" href="https://www.linkedin.com/in/sofia-ferrer-038575187/"><span>Sofia Ferrer</span></a>
                </div>
            </div>
        </div>
    );
}

export { Footer };