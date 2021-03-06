import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router';
import { history } from '../../redux/store';
import CompleteComponent from '../pages/CompleteComponent/CompleteComponent';
import SimpleComponent from '../pages/SimpleComponent/SimpleComponent';
import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary';

export const App: React.FC = () => {
   return (
      <ConnectedRouter history={history}>
         <ErrorBoundary>
            <Switch>
               <Route exact path={'/'} component={CompleteComponent} />
               <Route path={'/simple'} component={SimpleComponent} />
            </Switch>
         </ErrorBoundary>
      </ConnectedRouter>
   );
};

export default hot(module)(App);
