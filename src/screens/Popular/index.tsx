import React, { FC, useState, useEffect } from "react";
import { RouteComponentProps } from 'react-router-dom'
import { Layout } from '../../Layout'
import { Cards } from '../Cards'
import { Paginator } from "../Paginator";


const Popular: FC<RouteComponentProps<{ pag: string }>> = ({ match }) => {

    let pag = match.params.pag;
    const [renderPag, setRenderPag] = useState('1');

    useEffect(() => {
        setRenderPag(pag)
    }, [pag]);

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

export { Popular };