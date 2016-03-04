/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './app/view/common/app';
var Navigation = require('./app/view/common/navigation');

var haigame7 = React.createClass({
    render: function () {
      return (
          <Navigation component={App}/>
      );

    }
});

AppRegistry.registerComponent('haigame7', () => haigame7);
