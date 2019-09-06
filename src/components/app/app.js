import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, PostPage, UserPage } from '../pages';

import './app.css';

const App = () => {
    return (
        <Switch>
            <Route
                path="/"
                component={HomePage}
                exact />

            <Route
                path='/post-page/:id'
                render={({match})=> {
                    const { id } = match.params;
                    return <PostPage itemId={id} />
                }}
            />

            <Route
                path='/user-page/:id'
                render={({match})=> {
                    const { id } = match.params;
                    return <UserPage userId={id} />
                }}
            />
        </Switch>
    );
};

export default App;