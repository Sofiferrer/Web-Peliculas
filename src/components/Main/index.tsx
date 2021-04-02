import React, { FC } from "react";
import { Slider, Lists } from './components'

const Main: FC = ({ children }) => {

    return (
        <div className="main-container">
            <Slider />
            <Lists />
        </div>
    );
}

export { Main };