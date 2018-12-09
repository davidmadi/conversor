import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import Conversor from './screens/conversor';
import Information from './screens/information';
import Icon from './screens/icon/icon';


const AppNavigator = StackNavigator(
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

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
