import React, { FC } from "react";
import { movie } from '../../api'
import { Slider, Lists } from './components'

const Main: FC = ({ children }) => {
    movie.get();
    return (
        <div className="main-container">
            <Slider />
            <Lists />
        </div>
    );
}

export { Main };