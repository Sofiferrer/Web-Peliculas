import React, { FC } from "react";
import { Cards } from "./Cards";
import { Layout } from '../../Layout'
import { Paginator } from '../Paginator'
import { RouteComponentProps } from "react-router";

const Latest: FC<RouteComponentProps<{ pag: string }>> = ({ match }) => {

    const page = match.params.pag
    console.log(page)

    return (
        <div>
            <Layout>
                <Cards pag={parseInt(page)}/>
                <Paginator pag={parseInt(page)} />
            </Layout>
        </div>
    );

}

export { Latest };