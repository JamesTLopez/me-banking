import React from 'react';
import './App.css';
//Library imports
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Provider } from 'react-redux'
import {store,rrfProps} from './store'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

//User components
import Home from './Components/Pages/Home' ;
import Login from './Components/auth/Login' ;
import Register from './Components/auth/Register' ;
import Settings from './Components/settings/Settings' ;
import Dashboard from './Components/Layouts/Dashboard';
import addClients from './Components/clients/addClients';
import clientDetail from './Components/clients/clientDetails';
import editClientBalance from './Components/clients/editClientBalance';
import {UserIsAuthenticated,UserIsNotAuthenticated} from './helpers/auth'



//Import librarys
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <div className="App">
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login" component={UserIsNotAuthenticated(Login)}></Route>
                <Route exact path="/register" component={UserIsNotAuthenticated(Register)}></Route>
                <Route exact path="/dashboard" component={UserIsAuthenticated(Dashboard)}></Route>
                <Route exact path="/client/add" component={UserIsAuthenticated(addClients)}></Route>
                <Route exact path="/client/:id" component={UserIsAuthenticated(clientDetail)}></Route>
                <Route exact path="/client/edit/:id" component={UserIsAuthenticated(editClientBalance)}></Route>
                <Route exact path="/settings" component={UserIsAuthenticated(Settings)}></Route>
              </Switch>
            
          </div>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
    

  );
}

export default App;
