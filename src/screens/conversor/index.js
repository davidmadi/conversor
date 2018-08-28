import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, 
  Button, 
  H3, 
  Item,
  Input,
  Icon,
  Text } from "native-base";
import { connect } from "react-redux";
import MySidebar from '../../library/components/mySideBar';
import LeftSide from './leftSide';
import RightSide from './rightSide';
import TopMenu from './topMenu';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ConversorAction from '../../library/actions/conversor';
import { Font } from 'expo';

import Ingredientes from './Ingredientes'
import Medidas1 from './Medidas1'
import Medidas2 from './Medidas2'


import styles from "./styles";

const launchscreenBg = require("../../../assets/bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

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

    let strIngrediente = (this.props.ingrediente) ? this.props.ingrediente.nome : "Ingrediente"
    let strMedidaFrom = (this.props.medidaFrom) ? this.props.medidaFrom.nome : "   DE   "
    let strMedidaTo = (this.props.medidaTo) ? this.props.medidaTo.nome : "  PARA  "
    let is = "é";

    let content = (
      <Container>
        <ImageBackground source={launchscreenBg} style={styles.backgroundImage} >
          <View style={{height:20}} />
          <TopMenu />
          <Text style={styles.pageTitle}>Conversor de medidas</Text>


          <View style={{flex:1, height:30, flexDirection:'column', marginTop: 10, marginBottom:30, alignItems: 'center'}}>
            <Text style={styles.labelComponent}>{strIngrediente}</Text>
          </View>

          <View style={styles.colsWrapper}>
            <View style={styles.cols}>
              <Text style={styles.labelComponent}>Converter de:</Text>
              <Medidas2 />
            </View>
            <View style={styles.cols}>
              <Text style={styles.labelComponent}>para:</Text>
              <Medidas1 />
            </View>
          </View>

          <View style={{flex:1, marginTop: 50, flexDirection:'column', alignItems: 'center'}}>
            <Text style={styles.labelComponent}>Quantidade:</Text>
            <Input  style={styles.qtd} placeholder="" value={this.props.quantidade} 
              keyboardType={'numeric'}
              onChangeText={(text) => this.props.setQuantidade(this, text)} />
          </View>

          <View style={{flex:1, width: '100%', marginTop: 10, alignItems: 'center'}}>
            <Text style={{fontSize:20, color:'#DC7F9B'}} >{this.props.resultado}</Text>
          </View>

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
});

const mapDispatchToProps  = (dispatch) => ({
  setQuantidade : (_this, text) => {     
    ConversorAction.setQuantidade(dispatch, _this, text);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

