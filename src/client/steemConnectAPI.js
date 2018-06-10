import sc2 from 'sc2-sdk';

const api = sc2.Initialize({
  app: process.env.STEEMCONNECT_CLIENT_ID,
  baseURL: process.env.STEEMCONNECT_HOST,
  callbackURL: process.env.STEEMCONNECT_REDIRECT_URL,
  scope: ['vote', 'login', 'comment', 'comment_options', 'custom_json', 'delete_comment']
});

export default api;
