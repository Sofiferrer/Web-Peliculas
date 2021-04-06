import React, { FC } from "react";
import "./style.css"


const Main: FC = ({ children }) => {
    return (
        <div className="main-container">
            {children}
        </div>
    );
}

export { Main };