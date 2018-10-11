import { StyleSheet } from 'react-native';

const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: deviceWidth,
    height: null
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  colsWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cols:{
    flex: 1,
    width: deviceWidth/2,
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle:{
    fontSize: 40,
    lineHeight: 45,
    marginBottom: 10,
    color: '#DC7F9B',
    textAlign: 'center'
  },
  labelComponent:{
    flex:1,
    fontSize: 24,
    marginBottom: 10,
    color: '#DC7F9B',
  },
  smallLabelComponent:{
    flex:1,
    fontSize: 18,
    marginBottom: 10,
    color: '#DC7F9B',
  },
  qtd:{
    width: '100%',
    fontSize: 24,
    alignItems:'center',
    textAlign:'center'
  },
  signbutton:{
    flex:1,
    backgroundColor:'#DC7F9B'
  },
  signbuttontext:{
    flex:1,
    fontSize:20,
    color:'#000',
    width:'100%',
    textAlign:'center'
  }
});
