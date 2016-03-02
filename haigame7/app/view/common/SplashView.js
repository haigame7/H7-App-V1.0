"use strict"

import React, {
  View,
  Text,
  Image,
  Component,
  Dimensions,
  Animated
} from 'react-native';

import SplashStyle from './styles/SplashStyle' //这个引用可能不对

//屏幕宽度
var WIDTH = Dimensions.get('window').width;

export default class SplashScreen extends Component {

  constructor(props) {
    super(props);
    console.log(WIDTH);
    this.state = {
      cover: {image: {uri: 'http://img4.duitang.com/uploads/blog/201307/16/20130716084803_syBdu.thumb.600_0.jpeg'}, text: 'Girl\'s Generation'}, // 封面 splash
      boundceValue: new Animated.Value(1)// 弹力值
    }
  }

  componentDidMount() {
    Animated.timing (
      this.state.boundceValue, {toValue: 1.2, duration: 2000}
    ).start();
  }

  render() {
    return (
      <View style = {SplashStyle.container}>
        <Animated.Image
          source={{uri: this.state.cover.image.uri}}
          style={_styles.an_img}
        >
        <Text style={SplashStyle.text}>
          {this.state.cover.text}
        </Text>
      </View>

    );
  }
}
const _styles = StyleSheet.create({
  an_img: {
    flex: 1,
    width: WIDTH,
    height: 1,
    transform: [{scale: this.state.bounceValue}]
  }
});
