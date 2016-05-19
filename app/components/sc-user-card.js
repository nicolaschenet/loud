import Ember from 'ember';

const { run, $, computed } = Ember;

export default Ember.Component.extend({
  classNames: ['ui', 'card'],

  avatarURL: computed(function () {
    return this.get('user.avatar_url').replace('large', 't300x300');
  }),

  didInsertElement() {
    run.scheduleOnce('afterRender', this, function () {
      this.applyDimmer();
    });
  },

  applyDimmer() {
    const $image = $('.image', this.element);
    $image.dimmer({
      on: 'hover'
    });
  }
});
