import React, { FC } from "react";
import { Cards } from "./Cards";
import { Layout } from '../../Layout'
import { Prueba } from './Cards/prueba'
import { PaginationContainer } from "./Cards/paginationContainer";

const Latest: FC = () => {

    return (
        <div>
            <Layout>
                <PaginationContainer />
            </Layout>
        </div>
    );

}

export { Latest };