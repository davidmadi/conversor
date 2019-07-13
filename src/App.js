import React from "react";
import { Root } from "native-base";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Conversor from './screens/conversor';
import Information from './screens/information';
import Icon from './screens/icon/icon';


const AppNavigator = createStackNavigator(
  {
    Conversor : {screen : Conversor},
    Information : {screen : Information},
    Icon : {screen : Icon},
  },
  {
    initialRouteName: "Conversor",
    headerMode: "none"
  }
);

const CAppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <CAppContainer />
  </Root>;
