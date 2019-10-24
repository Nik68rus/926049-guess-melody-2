import renderer from 'react-test-renderer';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';

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
    />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
