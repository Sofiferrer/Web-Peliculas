import React, { FC } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom'
import { Layout } from '../../Layout';
import { File } from './File.tsx';

const Detail: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {

    const id = match.params.id;

    return (
        <div>
            <Layout>
                <File id={id} />
            </Layout>
        </div>

    );
}

export { Detail };