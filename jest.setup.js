window.React = require(`react`);
window.PropTypes = require(`prop-types`);
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

