import React, { FC } from 'react';
import { Footer, Header } from './components';
import { Slider, Lists } from '../Main/components'
import './style.css'

const Layout: FC = () => {
    return (
        <div>
            <Header />
            <Slider />
            <Lists />
            <Footer />
        </div>
    );
}

export { Layout }