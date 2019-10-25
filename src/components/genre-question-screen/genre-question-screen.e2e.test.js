import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';

Enzyme.configure({adapter: new Adapter()});

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
