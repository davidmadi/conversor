import * as Expo from "expo";
import React, { Component } from "react";
import { StyleProvider } from "native-base";

import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import reducer from "../reducers";
import { NativeModules } from 'react-native'

let generalStore = createStore(reducer);

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    NativeModules.ExponentLocalization.getCurrentLocaleAsync().then((lang) =>{
      generalStore.dispatch({type:lang});
      console.log({type:lang});
    });
  
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={generalStore}>
          <App />
        </Provider>
      </StyleProvider>
    );
  }
}
