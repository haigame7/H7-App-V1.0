import React,{Component} from 'react'
import { PropTypes, Image, Animated, View ,Text,StyleSheet,TouchableOpacity,Alert,NativeAppEventEmitter} from 'react-native'
var ManagerBridger = require('react-native').NativeModules.ManagerBridger;
var PaymentManager = require('react-native').NativeModules.PaymentManager;
var AppDelegate = require('react-native').NativeModules.AppDelegate;
export default class extends Component {

  componentDidMount(){
    this.subscription = NativeAppEventEmitter.addListener(
      'EventReminder',
      (reminder) => console.log(reminder.name)
    );
  }
  componentWillUnmount(){
    this.subscription.remove();
  }
  _onPressButton(){
    PaymentManager.purchaseEvent('titleName', (res)=>{
    //  Alert.alert('d');
    console.log(res);
    });
    // AppDelegate.jumpto('Birthday Party', (res)=> {
    //   console.log(res);
    //   // Alert.alert(events)
    // });
  }
  render() {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this._onPressButton.bind(this)}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
