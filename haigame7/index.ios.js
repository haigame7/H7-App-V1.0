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
import Navigator from './app/view/common/navigation';


class haigame7 extends Component {

  render(){
   return(
     <Navigator component={App} />
   );
  }
}
AppRegistry.registerComponent('haigame7', () => haigame7);
