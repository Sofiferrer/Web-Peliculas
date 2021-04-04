import React, { FC } from "react";
import { Title } from "./components/Title";
import { Navbarr } from "./components/Navbar";


const Header: FC = () => {
    return (
        <div>
            <Title />
            <Navbarr />
        </div>

    );
}

export { Header };