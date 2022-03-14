import './assets/css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  Switch,
  Route
} from "react-router-dom";
import SignIn from './pages/auth/SignIn';
import CreateBOQ from './pages/CreateBOQ/CreateBOQ';
import ForgotPassword from './pages/auth/ForgotPassword/ForgotPassword';
import ChangePassword from './pages/auth/ChangePassword/ChangePassword';
import UserList from './pages/User/UserList';
import BoqUserGroup from './pages/User/UserGroup';
import Dashboard from './pages/auth/Dashboard';
import LeadList from './pages/auth/LeadList';
import BoqList from './pages/auth/BoqList';
import { UserContextProvider } from '../src/Util/UserProvider';
import { BlockContextProvider } from '../src/Util/ListProvider';

function App() {
  return (
    <>

      <Switch>
        {/*----------------------- User Auth start --------------------- */}
        <Route path="/signin" component={SignIn} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/change-password" component={ChangePassword} />
        {/*----------------------- User Auth end--------------------- */}
        <UserContextProvider>
          <BlockContextProvider>
            <Route path="/userlist" component={UserList} />
            <Route path="/lead-listing" component={LeadList} />
            <Route path="/boq-listing" component={BoqList} />
            <Route path="/create-boq" component={CreateBOQ} />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route path="/create-group" component={BoqUserGroup} />
          </BlockContextProvider>
        </UserContextProvider>
        <Route path="*" component={ChangePassword} />
      </Switch>

    </>
  );
}

export default App;
