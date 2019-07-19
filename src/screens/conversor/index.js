const ReactN = require("react-native");
import React, { Component } from "react";
import { Image, View, TouchableOpacity, Platform,ImageBackground  } from "react-native";
import { Container, 
  Button, 
  H3, 
  Item,
  Input,
  Icon,
  Text, 
  Content,
  Right
} from "native-base";
import { connect } from "react-redux";
import TopMenu from './topMenu';
import ConversorAction from '../../library/actions/conversor';
//import { Font } from 'expo';
import * as Font from 'expo-font'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Medidas1 from './MedidasFrom'
import Medidas2 from './MedidasTo'
import styles from "./styles";
import ResourceAction from '../../library/actions/resource';
//import { Constants } from 'expo';
//import * as Constants from 'expo-file-system'
import Constants from 'expo-constants';


const { Dimensions } = ReactN;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const launchscreenBg = require("../../../assets/bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");
const android = (Platform.OS != "ios") ? true : false;
const divPlat = (android) ? 1 : 2;

const height05 = parseInt(deviceHeight*0.05);
const device08 = parseInt(deviceHeight*0.4);

class Home extends Component {

  constructor(){
    super();
    this.state = {
      loading:false,
      fontLoaded: false
    };
    this.onChooseLeft = this.onChooseLeft.bind(this);
    this.onChooseRightFrom = this.onChooseRightFrom.bind(this);
    this.onChooseRightTo = this.onChooseRightTo.bind(this);
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Riesling': require('../../../assets/fonts/riesling.ttf')
    });

    this.setState({ fontLoaded: true });
  }
  

  openLeft(){
    this._mysidebar.openLeft();
  }
  openRight(){
    this._mysidebar.openRight();
  }
  onChooseLeft(){
    this._mysidebar.close();
  }
  onChooseRightFrom(){
    this._mysidebar.close();
  }
  onChooseRightTo(){
    this._mysidebar.close();
  }

  render() {

    let strIngrediente = (this.props.ingrediente) ? this.props.ingrediente.nome : ""
    let strMedidaFrom = "";
    if (this.props.medidaFrom)
      strMedidaFrom = ResourceAction.message((this.props.quantidade > 1) ? this.props.medidaFrom.plural : this.props.medidaFrom.nome, this.props.languageReducer);

    let strMedidaTo = ResourceAction.message("escolha um ingrediente", this.props.languageReducer);
    if (this.props.resultado)
      strMedidaTo = ResourceAction.message((this.props.resultado === "1") ? this.props.medidaTo.nome : this.props.medidaTo.plural, this.props.languageReducer);

    let isAndroid = (Platform.OS != "ios") ? true : false;

    let content = (
      <Container>
        <ImageBackground style={{width: '100%', height: '100%'}} source={require('../../../assets/background-pattern.png')}>
          <Content scrollEnabled={false}>
            <View style={{flex:21, flexDirection:'column', justifyContent:'flex-start'}}>

              <View style={{flex:2, flexDirection:'column', alignSelf:'center'}}>
                <View style={{ height: Constants.statusBarHeight, backgroundColor:'white'}} />
                <TopMenu />
                <View style={{height:5}} />
              </View>

              <View style={{flex:8, flexDirection:'column', justifyContent:'space-between'}}>
                <View style={{flex: 4,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop:20,
                      height:device08
                  }}>
                  <View style={{alignSelf:'flex-start', width: deviceWidth/2,
                    marginTop: 0, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{height:height05}}>
                      <Text style={styles.blackSmallLabel}>{ResourceAction.message("De", this.props.languageReducer)} {styles.height05}</Text>
                    </View>
                    <Medidas1 />
                  </View>
                  <View style={{alignSelf:'flex-start', width: deviceWidth/2, 
                    marginTop: 0, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{height:height05}}>
                      <Text style={styles.pinkSmallLabel}>{ResourceAction.message("Para", this.props.languageReducer)}</Text>
                    </View>
                    <Medidas2 />
                  </View>
                </View>              
              </View>

              <View style={{flex:2,marginTop:5, flexDirection:'column', alignItems:'center'}}>
                  <Text style={{fontSize:20, color:'#000'}}>{ResourceAction.message(strIngrediente, this.props.languageReducer)}</Text>
              </View>
              <View style={{flex:2, marginLeft:10, marginRight:10, marginTop:10, flexDirection:'row'}}>
                <Button style={styles.signbutton} onPress={() => this.props.minusQuantidade(this)}>
                  <Text style={styles.signbuttontext}>-</Text>
                </Button>
                <Input  style={styles.qtd} placeholder="" value={this.props.quantidade} 
                  keyboardType={'numeric'}
                  onChangeText={(text) => this.props.setQuantidade(this, text)} />
                <Button style={styles.signbutton} onPress={() => this.props.plusQuantidade(this)}>
                  <Text style={styles.signbuttontext}>+</Text>
                </Button>
              </View>

              <View style={{flex:2, padding:5, marginTop:10, flexDirection:'row', alignItems: 'center'}}>
                <View style={{flex:2, width: '100%', margin: 0, alignItems: 'center'}}>
                  <Text style={styles.labelComponent}>{strMedidaFrom}</Text>
                </View>
              </View>
              <View style={{flex:2, height:height05, flexDirection:'column', alignItems: 'center'}}>
                <Text style={styles.labelComponent}>=</Text>
              </View>

              <View style={{flex:2, padding:5, marginTop:10, flexDirection:'row', alignItems: 'center'}}>
                <View style={{flex:2, width: '100%', margin: 0, alignItems: 'center'}}>
                  <Text style={{fontSize:24, color:'#DC7F9B'}}>{this.props.resultado} {strMedidaTo}</Text>
                </View>
              </View>

              <View style={{flex:1, flexDirection:'column', alignSelf:'flex-end'}}>
                <Right>
                  <TouchableOpacity style={{marginRight:10}}   onPress={() => this.props.info(this)}>
                    <Image style={{width:20, height:20}} source={require('../../../assets/icons/language_icon.png')}/>
                  </TouchableOpacity>
                </Right>
              </View>

            </View>
          </Content>    
        </ImageBackground> 
      </Container>
    );

    if( this.state.fontLoaded ){
      return (
       content
      );
    }
    else
    {
      return(
        <Text>Loading . . .</Text>
      );
    }      
  }
}

const mapStateToProps = (allReducers) => ({
  conversor : allReducers.conversorReducer.conversor,
  ingrediente : allReducers.conversorReducer.ingrediente,
  allIngredientes : allReducers.conversorReducer.allIngredientes,
  medidaFrom : allReducers.conversorReducer.medidaFrom,
  medidaTo : allReducers.conversorReducer.medidaTo,
  quantidade : allReducers.conversorReducer.quantidade,
  resultado : allReducers.conversorReducer.resultado,
  languageReducer : allReducers.languageReducer
});

const mapDispatchToProps  = (dispatch) => ({
  setQuantidade : (_this, text) => {     
    ConversorAction.setQuantidade(dispatch, _this, text);
  },
  setMedidaFrom :(_this, medida)=> {
    ConversorAction.setMedidaFrom(dispatch, _this, medida);
  },
  setMedidaTo :(_this, medida)=> {
    ConversorAction.setMedidaTo(dispatch, _this, medida);
  },
  plusQuantidade :(_this)=> {
    ConversorAction.plusQuantidade(dispatch, _this);
  },
  minusQuantidade :(_this)=> {
    ConversorAction.minusQuantidade(dispatch, _this);
  },
  info : (_this) =>{
    _this.props.navigation.navigate("Information");
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

