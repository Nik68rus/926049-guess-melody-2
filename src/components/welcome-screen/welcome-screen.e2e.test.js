import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from '../welcome-screen/welcome-screen';

Enzyme.configure({adapter: new Adapter()});

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
