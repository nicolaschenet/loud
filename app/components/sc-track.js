import Ember from 'ember';

const { computed, run, $ } = Ember;

export default Ember.Component.extend({
  classNames: ['item'],

  humanDuration: computed(function () {
    const duration = this.get('track.duration');
    return window.moment.duration(duration).humanize();
  }),

  artworkURL: computed(function () {
    return this.get('track.artwork_url').replace('large', 't300x300');
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
