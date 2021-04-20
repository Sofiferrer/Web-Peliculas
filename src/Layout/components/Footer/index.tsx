import React, { FC } from "react";
import "./style.css"

const Footer: FC = () => {
    return (
        <div className="footer-container">
            <div className="footer-contain">
                <div className="footer-text">
                    <div className="footer-p"><p>MOVIE APP</p></div>
                    <div className="footer-span"><span>Desarrollada por</span></div>
                    <div className="footer-a"><a target="_blank" href="https://www.linkedin.com/in/sofia-ferrer-038575187/"><span>Sofia Ferrer</span></a></div>
                </div>
            </div>
        </div>
    );
}

export { Footer };