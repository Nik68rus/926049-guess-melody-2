import renderer from 'react-test-renderer';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';

const createNodeMock = (element) => {
  if (element.type === `audio`) {
    return HTMLAudioElement;
  }
  return null;
};

it(`Artist question screen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<ArtistQuestionScreen
      question={{
        type: ``,
        song: {
          artist: ``,
          src: ``,
        },
        answers: [{
          picture: ``,
          artist: ``,
        }]
      }}
      onAnswer={() => {}}
    />, {createNodeMock})
  .toJSON();

  expect(tree).toMatchSnapshot();
});
