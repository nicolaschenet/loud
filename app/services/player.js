import Ember from 'ember';

const { observer, inject, computed } = Ember;

export default Ember.Service.extend({

  boundSounds: [],

  streamTrack(track) {
    this.set('track', track);
    SC.stream(`/tracks/${track.id}`).then((sound) => {
      this.listenToSoundEvents(sound);
      sound.play();
    });
  },

  listenToSoundEvents(sound) {
    const soundId = sound.getId();
    const boundSounds = this.get('boundSounds');

    this.set('currentSound', sound);

    if (boundSounds.contains(soundId)) {
      console.log('sound already bound, do not add event listeners');
      return;
    }

    // Listeners
    sound.on('state-change', (state) => {
      const isCurrentSound = soundId === this.get('currentSound').getId();
      if (isCurrentSound) {
        this.set('state', state);
      }
      console.log('player:state-change', state, soundId, isCurrentSound);
    });

    sound.on('time', () => {
      const time = sound.currentTime();
      const duration = sound.streamInfo.duration;
      const timePct = Math.round(time / duration * 100 * 100) / 100;
      // console.log('player:time', time, soundId);
      this.setProperties({
        time,
        timePct
      });
    })

    // Store bound sounds
    this.get('boundSounds').push(soundId);

  },

  isPlaying: computed.equal('state', 'playing')


});
