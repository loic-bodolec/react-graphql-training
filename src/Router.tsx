import { useQuery } from '@apollo/client';
import { Redirect, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import DashboardScreen, { GET_PROFILE } from './views/Dashboard';
import HomeScreen from './views/Home';
import SigninScreen from './views/Signin';
import SignupScreen from './views/Signup';

function Router(): JSX.Element {
  const { data /* loading, error */ } = useQuery(GET_PROFILE);

  return (
    <BrowserRouter>
      <Redirect exact path="/" to={data ? '/dashboard' : '/'} />
      <Route exact path="/signin">
        <SigninScreen></SigninScreen>
      </Route>
      <Route exact path="/signup">
        <SignupScreen></SignupScreen>
      </Route>
      <Route exact path="/dashboard">
        <DashboardScreen></DashboardScreen>
      </Route>
      <Route exact path="/">
        <HomeScreen></HomeScreen>
      </Route>
    </BrowserRouter>
  );
}

export default Router;
