import React, { FC } from "react";
import { movie } from '../../api'
import { Slider } from './components'

const Main: FC = ({ children }) => {
    movie.get();
    return (
        <div className="main-container">
            <Slider />
            Main
        </div>
    );
}

export { Main };