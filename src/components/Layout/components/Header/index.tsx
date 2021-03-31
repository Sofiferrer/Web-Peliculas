import React, { FC } from "react";
import { Title } from "./components/Title";
import { Navbarr } from "./components/Navbar";


const Header: FC = ({ children }) => {
    return (
        <div>
            <Title />
            <Navbarr />
        </div>

    );
}

export { Header };