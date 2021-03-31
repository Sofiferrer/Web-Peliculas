import React, { FC } from "react";
import './style.css';
import { Film } from "react-bootstrap-icons";
import { Navbar, Nav } from "react-bootstrap"


const Navbarr: FC = () => {
    return (
        <div className="navbar-container">
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-link" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navbar">
                        <Nav.Link href="#home" className="nav-link">HOME</Nav.Link>
                        <Nav.Link href="#link" className="nav-link">ULTIMOS LANZAMIENTOS</Nav.Link>
                        <Nav.Link href="#link" className="nav-link">POPULARES</Nav.Link>
                        <Nav.Link href="#link" className="nav-link">BUSCAR</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export { Navbarr };