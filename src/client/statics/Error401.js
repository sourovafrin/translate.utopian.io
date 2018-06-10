import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import SteemConnect from '../steemConnectAPI';
import './ErrorPage.less';

const Error401 = ({ staticContext }) => {
  if (staticContext) {
    staticContext.status = 401; // eslint-disable-line no-param-reassign
  }
  return (
    <div className="ErrorPage container">
      <h1>
        Translate Open Source Projects on CrowdIn!
      </h1>
      <h2>
        And..get rewarded!
      </h2>
      <h3>Get Rewarded for Awesome Translations</h3>
      <p>
        In collaboration with the DaVinci curation initiative on Steem, you can now be rewarded for translating awesome Open Source projects!
        Get in touch on <a target="_blank" href="https://discord.gg/vMGmDSm">Discord</a>.
      </p>
      <br/>
      <p>
        <button style={{background: 'blue', width: '100%', minHeight: '50px', cursor: 'pointer', color: 'white'}} className="SidebarBlock__button" onClick={() => window.location.href = SteemConnect.getLoginURL()}>Login</button>
        By clicking on "Login" you agree to have read and accepted our <a href="https://join.utopian.io/privacy" target="_blank">Privacy Policy</a> and <a href="https://join.utopian.io/tos" target="_blank">Terms of Service</a>.
      </p>
    </div>
  );
};

Error401.propTypes = {
  staticContext: PropTypes.shape(),
};

Error401.defaultProps = {
  staticContext: null,
};

export default withRouter(Error401);
