import {shallow} from 'enzyme';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';

it(`Artist question answer is string`, () => {
  const mockQuestion = {
    type: ``,
    song: {
      artist: ``,
      src: ``,
    },
    answers: [{
      picture: ``,
      artist: ``,
    }]
  };

  const answerHandler = jest.fn();

  const artistQuestionScreen = shallow(
      <ArtistQuestionScreen
        question={mockQuestion}
        onAnswer={answerHandler}
      />
  );

  const artistQuestionForm = artistQuestionScreen.find(`form`);
  artistQuestionForm.simulate(`change`, {target: {value: ``}});
  expect(answerHandler).toHaveBeenCalledWith(``);
});
