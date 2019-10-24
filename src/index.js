import ReactDOM from 'react-dom';
import App from './components/app/app';
import {questions, settings} from './mocks/questions';

const init = (gameSettings, gameQuestions) => {
  ReactDOM.render(
      <App
        errorCount={gameSettings.errorCount}
        gameTime={gameSettings.gameTime}
        questions={gameQuestions}
      />,
      document.querySelector(`#root`)
  );
};

init(settings, questions);
