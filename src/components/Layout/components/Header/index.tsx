import React, { FC } from "react";
import './style.css';
import { Film, List } from "react-bootstrap-icons";
import { Navbar, Nav } from "react-bootstrap"


const Header: FC = () => {
    return (
        <div className="header-container">
            <Navbar expand="lg">
                <Navbar.Brand href="#home"><Film /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navbar">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Ultimos Lanzamientos</Nav.Link>
                        <Nav.Link href="#link">Populares</Nav.Link>
                        <Nav.Link href="#link">Buscar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export { Header };