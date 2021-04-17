import React, { FC } from "react";
import { Cards } from "./Cards";
import { Layout } from '../../Layout'
import { Paginator } from '../Paginator'
import { RouteComponentProps } from "react-router";

const Latest: FC<RouteComponentProps<{ pag: string }>> = ({ match }) => {

    const pag = match.params.pag
    console.log(pag)

    return (
        <div>
            <Layout>
                <Cards />
                <Paginator />
            </Layout>
        </div>
    );

}

export { Latest };