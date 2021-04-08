import React, { FC } from 'react';
import { Footer, Header } from './components';
import { Main } from './components/Main';
import { Navbarr } from './components/Navbar';

const Layout: FC = ({ children }) => {
    return (
        <>
            <Header />
            <Navbarr />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    );
}

export { Layout }