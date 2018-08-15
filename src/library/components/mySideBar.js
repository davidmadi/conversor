import React, { Component } from "react";
import { Animated, View, TouchableOpacity } from "react-native";

const ReactNative = require("react-native");
const { Dimensions } = ReactNative;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

class MySideBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      current : "none",
      leftView : (this.props.leftView) ? this.props.leftView : <View/>,
      rightView : (this.props.rightView) ? this.props.rightView : <View/>
    };
  }

  openLeft(){
    this.setState({
      current:"left"
    });
  }
  openRight(){
    this.setState({
      current:"right"
    });
  }
  close(){
    this.setState({
      current:"none"
    });
  }

  render() {

    let sidebarwidth = 200;
    let sidebarwidthMinus = -200;
    let leftShow = (this.state.current === "left") ? this.state.leftView : <View/>;
    let rightShow = (this.state.current === "right") ? this.state.rightView : <View/>;
    let leftViewLeftPos = (this.state.current === "left") ? 0 : sidebarwidthMinus;
    let rightViewLeftPos = (this.state.current === "right") ? deviceWidth - sidebarwidth : deviceWidth;
    return (
      <View>
        <View style={{position:'absolute', width:sidebarwidth, left:leftViewLeftPos, height:deviceHeight, zIndex:11}}>
          {leftShow}
        </View>
        <TouchableOpacity onPress={()=>this.close()} style={{ width:deviceWidth, zIndex:10, position:'absolute', left:0, height:deviceHeight, backgroundColor:'blue' }}>
          {this.props.contentView}
        </TouchableOpacity>
        <View style={{position:'absolute', width:sidebarwidth, backgroundColor:'red', height:deviceHeight, left:rightViewLeftPos, zIndex:11}}>
          {rightShow}
        </View>
      </View>
    );
  }
}

export default MySideBar;
