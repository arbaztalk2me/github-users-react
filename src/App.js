import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Login from './pages/Login';
import AuthWrapper from './pages/AuthWrapper'
import PrivateRoute from './pages/PrivateRoute';

function App() {
  return (
    <AuthWrapper>
      <Router>
      <Switch>
      <PrivateRoute path="/" exact={true}>
        <Dashboard/>
      </PrivateRoute>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="*">
        <Error/>
      </Route>
      </Switch>
    </Router>
    </AuthWrapper>
  );
}

export default App;
