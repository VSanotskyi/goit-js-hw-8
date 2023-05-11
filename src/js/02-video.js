import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const KEY_TIME = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle((e) => {
    const localSetTime = e.seconds;
    localStorage.setItem(KEY_TIME, localSetTime);
    console.log(localSetTime);
  }, 1000),
);

const saveTime = localStorage.getItem(KEY_TIME);

if(saveTime) {
  player.setCurrentTime(saveTime);
}