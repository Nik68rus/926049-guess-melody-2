import {shallow} from 'enzyme';
import WelcomeScreen from '../welcome-screen/welcome-screen';

it(`Button click action called once`, () => {
  const clickHandler = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        time={0}
        errorCount={0}
        onStartButtonClick={clickHandler}
      />
  );

  const startBtn = welcomeScreen.find(`button`);
  startBtn.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
