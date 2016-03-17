const USER_MODELS = {
  1: {name: 'mot', age: 23},
  2: {name: 'huharoan', age: 26},
};


import React, {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import FirstPageComponent from './FirstPageComponent';

export default class SecondPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id : null
    };
  }

  componentWillMount() {
        //这里获取从FirstPageComponent传递过来的参数: id
        this.setState({
            id: this.props.id //这个ID是从第一个component中传过来的
        });
        console.log('当前props' + this.props);
    }

  _pressButton() {
    const { navigator } = this.props;
    if(this.props.getUser) {
      var user = USER_MODELS[this.props.id];
      this.props.getUser(user);
    }
    if(navigator) {
      //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
       navigator.pop();
    }
  }

  render() {
    return (
      <View>
      <Text>获得的参数: id={ this.state.id }</Text>
          <TouchableOpacity onPress={this._pressButton.bind(this)}>
              <Text>点我跳回去</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
