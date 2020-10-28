import Switch from 'react-switch';
import { react2angular } from 'react2angular';
import Application from './application';

Application.Components.component('switch', react2angular(Switch, ['checked', 'onChange', 'id', 'className']));