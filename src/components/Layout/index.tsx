import React, { FC } from 'react';
import { Footer, Header, Slider } from './components';
import { Main } from '../Main'


interface Props {
    hideHeader?: boolean,
    hideAside?: boolean,
    hideFooter?: boolean
}

const Layout: FC<Props> = ({ children, hideHeader = false, hideAside = false, hideFooter = false }) => {
    return (
        <div>
            <Header />
            <Slider />
            <Main />
            <Footer />
        </div>
    );
}

export { Layout }