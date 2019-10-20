import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen';

const App = (props) => {
  const {gameTime, errorCount, clickHandler} = props;
  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
    clickHandler={clickHandler}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default App;
