import renderer from 'react-test-renderer';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';

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
    />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
