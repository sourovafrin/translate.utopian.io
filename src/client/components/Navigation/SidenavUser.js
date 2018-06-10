import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import './Sidenav.less';

const SidenavUser = () => (
  <ul className="Sidenav">
    <li>
      <NavLink to="/drafts" activeClassName="Sidenav__item--active">
        <i className="iconfont icon-write" />
        <FormattedMessage id="drafts" defaultMessage="Drafts" />
      </NavLink>
    </li>
    <li>
      <NavLink to="/editor" activeClassName="Sidenav__item--active">
        <i className="iconfont icon-write" />
        Contribution
      </NavLink>
    </li>
  </ul>
);

export default SidenavUser;
