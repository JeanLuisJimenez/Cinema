import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { routes } from './routes';
import PrivateRoutes from './routes/privateRoutes';

function App () {
    return (
        <Router className="App" style={ {
            margin: 0, display: 'flex',
        } }>
            <nav style={ styles.navContainer }>
                <ul style={ styles.itemsContainer }>
                    { routes.map((route, index) =>
                        <li key={ index } style={ {listStyle: 'none'} }>
                            <Link style={ styles.link } to={ route.path }> { route.name } </Link>
                        </li>,
                    ) }
                </ul>
            </nav>
            { routes.map((route, index) => {
                if (route.isRequireAuth) {
                    return <PrivateRoutes key={ index } path={ route.path } component={ route.component }
                                          accessLevel={ route.accessLevel }/>;
                }
                return <Route key={ index } path={ route.path } component={ route.component }/>;
            }) }
        </Router>
    );
}

const styles = {
    navContainer: {
        backgroundColor: '#5d6d79',
        width: '100%',
        height: 50,
        margin: 0,
    },
    itemsContainer: {
        flexDirection: 'row',
        flex: 1,
        margin: 5,
        display: 'flex',
        position: 'absolute',
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        display: 'inline-block',
        margin: 10,
    },
};

export default App;
