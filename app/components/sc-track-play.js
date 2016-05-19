import Ember from 'ember';

const { inject } = Ember;

export default Ember.Component.extend({

  classNames: ['ui', 'button'],
  tagName: 'button',

  player: inject.service(),

  click() {
    const track = this.get('track');
    this.get('player').streamTrack(track);
  }
});
