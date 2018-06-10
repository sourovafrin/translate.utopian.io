import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UserInfo from './UserInfo';
import Navigation from './Navigation';
import SidenavUser from '../../components/Navigation/SidenavUser';

const LeftSidebar = () => (
  <Switch>
    <Route path="/drafts" component={SidenavUser} />
    <Route path="/" component={Navigation} />
  </Switch>
);

export default LeftSidebar;
