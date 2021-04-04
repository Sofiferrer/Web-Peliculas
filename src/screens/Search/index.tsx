import React, { FC } from "react";
import './style.css';
import { Navbarr } from '../../components/Layout/components/Header/components/Navbar';
import { Footer } from "../../components/Layout/components";

const Search: FC = () => {

    return (
        <div className="search-screen">
            <Navbarr />

            <Footer />
        </div>
    )

}

export { Search };