import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Detail } from './Detail';
import { Home } from './Home';
import { Search } from './Search';
import { Latest } from './Latest';
import { Popular } from './Popular';

const Screens: FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/ficha/:id" component={Detail} />
                <Route path="/buscar" component={Search} />
                <Route path="/nuevas/:pag" component={Latest} />
                <Route path="/populares/:pag" component={Popular} />
                <Route path="" component={Home} />
            </Switch>
        </Router>
    )
}

export { Screens };