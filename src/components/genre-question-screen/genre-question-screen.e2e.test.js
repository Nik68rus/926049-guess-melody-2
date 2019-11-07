import {shallow} from 'enzyme';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';

it(`Genre question answer is array of strings`, () => {
  const mockQuestion = {
    type: ``,
    genre: ``,
    answers: [{
      src: ``,
      genre: ``,
    }]
  };

  const answerHandler = jest.fn();
  const preventDefault = jest.fn();

  const genreQuestionScreen = shallow(
      <GenreQuestionScreen
        question={mockQuestion}
        onAnswer={answerHandler}
      />
  );

  const genreQuestionForm = genreQuestionScreen.find(`form`);
  const answerCheckbox = genreQuestionForm.find(`input`);
  answerCheckbox.simulate(`click`);
  genreQuestionForm.simulate(`submit`, {preventDefault});
  expect(answerHandler).toHaveBeenCalledWith([]);
});
