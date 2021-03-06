import React, { FC } from "react";
import './style.css';
import { Navbar, Nav } from "react-bootstrap"
import { Logo } from "./logo";



const Navbarr: FC = () => {
    return (
        <div className="navbar-container">
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-link" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navbar">
                        <Nav.Link href="/" className="nav-link"><Logo /></Nav.Link>
                        <Nav.Link href="/" className="nav-link">HOME</Nav.Link>
                        <Nav.Link href="/nuevas/1" className="nav-link">ULTIMOS LANZAMIENTOS</Nav.Link>
                        <Nav.Link href="/populares/1" className="nav-link">POPULARES</Nav.Link>
                        <Nav.Link href="/buscar" className="nav-link">BUSCAR</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export { Navbarr };