import renderer from 'react-test-renderer';
import WelcomeScreen from '../welcome-screen/welcome-screen';

it(`Welcome screen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      time={0}
      errorCount={0}
      onStartButtonClick={()=>{}}
    />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
