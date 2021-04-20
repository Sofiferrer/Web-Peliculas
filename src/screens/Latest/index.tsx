import React, { FC } from "react";
import { Layout } from '../../Layout'
import { Paginator, Cards } from '../../components'
import { RouteComponentProps } from "react-router";

const Latest: FC<RouteComponentProps<{ pag: string }>> = ({ match }) => {

    const page = parseInt(match.params.pag)

    return (
        <div>
            <Layout>
                <Cards pag={page} />
                <Paginator pag={page} />
            </Layout>
        </div>
    );

}

export { Latest };