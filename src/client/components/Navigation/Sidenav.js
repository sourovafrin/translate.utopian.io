import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import './Sidenav.less';

const isEditor = (match, location) => location.pathname.match(/editor/);

const Sidenav = ({ username }) =>
  username ? (
    <ul className="Sidenav">
      <li>
        <NavLink to="/editor" activeClassName="Sidenav__item--active" isActive={isEditor}>
          <i className="iconfont icon-wallet" />
          <FormattedMessage id="wallet" defaultMessage="Wallet" />
        </NavLink>
      </li>
    </ul>
  ) : null;

Sidenav.propTypes = {
  username: PropTypes.string,
};

Sidenav.defaultProps = {
  username: undefined,
};

export default Sidenav;
