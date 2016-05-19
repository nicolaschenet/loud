import Ember from 'ember';

const { inject } = Ember;

export default Ember.Controller.extend({
  soundcloud: inject.service(),
  player: inject.service()
});
