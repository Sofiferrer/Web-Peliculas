import React, { FC } from "react";
import { MovieType } from '../../types/MovieType';
import { Layout } from '../../Layout'
import { Cards } from './Cards'


interface Props {
    data?: MovieType,
}

const Popular: FC<Props> = () => {

    return (
        <div>
            <Layout>
                <Cards />
            </Layout>
        </div>
    );

}

export { Popular };