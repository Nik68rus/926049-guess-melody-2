import renderer from 'react-test-renderer';
import AudioPlayer from '../audio-player/audio-player';

it(`Audio player correctly renders`, () => {
  const tree = renderer
    .create(<AudioPlayer
      isPlaying={true}
      onPlayButtonClick={()=>{}}
      src={``}
    />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
