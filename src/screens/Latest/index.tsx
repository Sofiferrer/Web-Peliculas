import React, { FC } from "react";
import { Cards } from "./Cards";
import { Layout } from '../../Layout'

const Latest: FC = () => {

    return (
        <div>
            <Layout>
                <Cards />
            </Layout>
        </div>
    );

}

export { Latest };