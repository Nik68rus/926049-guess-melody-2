import {mount} from 'enzyme';
import AudioPlayer from './audio-player.jsx';

window.HTMLMediaElement.prototype.pause = () => {};

it(`State is changing at play button click`, () => {
  const clickHandler = jest.fn();

  const audioPlayer = mount(
      <AudioPlayer
        isPlaying = {false}
        onPlayButtonClick = {clickHandler}
        src={``}
      />
  );

  const playButton = audioPlayer.find(`.track__button`);

  audioPlayer.setState({isLoading: false});
  expect(audioPlayer.state().isLoading).toEqual(false);

  playButton.simulate(`click`);
  expect(audioPlayer.state().isPlaying).toEqual(true);

  playButton.simulate(`click`);
  expect(audioPlayer.state().isPlaying).toEqual(false);
});
