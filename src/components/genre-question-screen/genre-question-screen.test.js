import renderer from 'react-test-renderer';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';

const createNodeMock = (element) => {
  if (element.type === `audio`) {
    return HTMLAudioElement;
  }
  return null;
};

it(`Genre question screen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<GenreQuestionScreen
      question={{
        type: ``,
        genre: ``,
        answers: [{
          src: ``,
          genre: ``,
        }]
      }}
      onAnswer={() => {}}
    />, {createNodeMock})
  .toJSON();

  expect(tree).toMatchSnapshot();
});
