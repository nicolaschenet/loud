import Ember from 'ember';

const { inject, computed, run } = Ember;

export default Ember.Component.extend({

  soundcloud: inject.service(),
  player: inject.service(),

  didInsertElement() {
    run.scheduleOnce('afterRender', this, function () {
      const iframe = document.getElementById('player');
      const user = this.get('soundcloud.user');
      iframe.src = `https://w.soundcloud.com/player/?url=${user.uri}/favorites`;
      const player = this.get('player');
      player.set('widget', SC.Widget(iframe));
    });
  }
});
