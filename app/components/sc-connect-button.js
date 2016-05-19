import Ember from 'ember';

export default Ember.Component.extend({
  soundcloud: Ember.inject.service(),
  actions: {
    connect() {
      const soundcloud = this.get('soundcloud');
      soundcloud.connect();
    }
  }
});
