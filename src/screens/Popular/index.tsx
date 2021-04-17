import React, { FC } from "react";
import { MovieType } from '../../types/MovieType';
import { Layout } from '../../Layout'
import { Cards, Paginator } from "../../components";
import { RouteComponentProps } from "react-router";




const Popular: FC<RouteComponentProps<{ pag: string }>> = ({ match }) => {

    const page = match.params.pag

    return (
        <div>
            <Layout>
                <Cards pag={parseInt(page)} />
                <Paginator pag={parseInt(page)} />
            </Layout>
        </div>
    );

}

export { Popular };