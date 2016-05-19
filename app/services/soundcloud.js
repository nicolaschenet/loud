import Ember from 'ember';

const { assert } = Ember;

export default Ember.Service.extend({

  isConnected: false,

  user: null,

  connect() {
    const SC = window.SC;
    return SC.connect()
    .then(() => {
      this.set('isConnected', true);
      SC.get('/me').then((user) => {
        console.log(user);
        this.set('user', user);
        this.getFavorites();
      });
    })
    .catch((error) => {
      console.error('soundcloud:connect:error', error.message);
    });
  },

  getFavorites() {
    const SC = window.SC;
    const user = this.get('user');
    assert("A user must be logged to be able to invoke `getFavorites`", user);
    const favoritesURL = `/users/${user.id}/favorites`;
    return SC.get(favoritesURL).then((favorites) => {
      this.set('user.favorites', favorites);
    });
  }
});
