import config from 'loud/config/environment';

export function initialize(/* application */) {
  const client_id = config.APP.SC_CLIENT_ID;
  const redirect_uri = config.APP.SC_REDIRECT_URI;
  window.SC.initialize({ client_id, redirect_uri });
}

export default {
  name: 'soundcloud-initializer',
  initialize
};
