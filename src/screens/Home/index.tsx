import React from 'react';
import { Layout } from '../../Layout'
import { Lists } from './components/Lists';
import { Slider } from './components/Slider';


const Home = () => {

    return (
        <div>
            <Layout>
                <Slider />
                <Lists />
            </Layout>
        </div>
    );
}

export { Home };