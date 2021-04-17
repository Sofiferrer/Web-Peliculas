import React, { FC, useState, useEffect } from "react";
import { RouteComponentProps } from 'react-router-dom'
import { Cards } from "../Cards";
import { Layout } from '../../Layout'
import { Paginator } from "../Paginator";


const Latest: FC<RouteComponentProps<{ pag: string }>> = ({ match }) => {

    let pag = match.params.pag;
    const [renderPag, setRenderPag] = useState('1');

    useEffect(() => {
        setRenderPag(pag)
    }, []);

    console.log(renderPag)
    console.log(pag)

    return (
        <div>
            <Layout>
                <Cards pag={renderPag} />
                <Paginator />
            </Layout>
        </div>
    );

}

export { Latest };