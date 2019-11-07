import renderer from 'react-test-renderer';
import AudioPlayer from '../audio-player/audio-player';

const createNodeMock = (element) => {
  if (element.type === `audio`) {
    return HTMLAudioElement;
  }
  return null;
};

it(`Audio player correctly renders`, () => {
  const tree = renderer
    .create(<AudioPlayer
      isPlaying={true}
      onPlayButtonClick={()=>{}}
      src={``}
    />, {createNodeMock})
  .toJSON();

  expect(tree).toMatchSnapshot();
});
