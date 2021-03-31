import React, { FC } from 'react';
import { Footer, Header } from './components';
import { Main } from '../Main'
import './style.css'


interface Props {
    hideHeader?: boolean,
    hideAside?: boolean,
    hideFooter?: boolean
}

const Layout: FC<Props> = ({ children, hideHeader = false, hideAside = false, hideFooter = false }) => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export { Layout }