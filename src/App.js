import React from 'react';
import './App.css';
//Library imports
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Provider } from 'react-redux'
import {store,rrfProps} from './store'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

//User components
import Home from './Components/Pages/Home' ;
import Login from './Components/Pages/Login' ;
import Dashboard from './Components/Layouts/Dashboard';
import addClients from './Components/clients/addClients';
import clientDetail from './Components/clients/clientDetails';



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
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/dashboard" component={Dashboard}></Route>
                <Route exact path="/client/add" component={addClients}></Route>
                <Route exact path="/client/:id" component={clientDetail}></Route>
              </Switch>
            
          </div>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
    

  );
}

export default App;
