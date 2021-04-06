import React, { FC } from "react";
import { MovieType } from '../../types/MovieType';
import { Layout } from '../../Layout'
import { SearchInput } from './Search Input'

const Search: FC = () => {

    return (
        <div>
            <Layout>
                <SearchInput />
            </Layout>
        </div>
    );

}

export { Search };