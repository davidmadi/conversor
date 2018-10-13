import React, { Component } from "react";

import { ImageBackground, View, StatusBar, Platform } from "react-native";
import { Container, 
  Button, 
  H3, 
  Item,
  Input,
  Icon,
  Text, 
  Label} from "native-base";
import { connect } from "react-redux";
import TopMenu from './topMenu';
import ConversorAction from '../../library/actions/conversor';
import { Font } from 'expo';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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

    let strIngrediente = (this.props.ingrediente) ? this.props.ingrediente.nome : ""
    let strMedidaFrom = "";
    if (this.props.medidaFrom)
      strMedidaFrom = (this.props.quantidade > 1) ? this.props.medidaFrom.plural : this.props.medidaFrom.nome;

    let strMedidaTo = "escolha um ingrediente";
    if (this.props.resultado)
      strMedidaTo = (this.props.resultado === "1") ? this.props.medidaTo.nome : this.props.medidaTo.plural;

    let strToSuffixo = (this.props.resultado) ? " de " + strIngrediente : "";
    let is = "é";
    let isAndroid = (Platform.OS === "Android") ? true : false;

    let content = (
      <Container>
        <View style={styles.backgroundImage}>
          <KeyboardAwareScrollView>
            {isAndroid ? 
              <View />
            : <View style={{height:20, backgroundColor:'white'}} />
            }
            <TopMenu />
            <View style={{height:10}} />

            <View style={styles.colsWrapper}>
              <View style={styles.cols}>
                <Text style={styles.blackSmallLabel}>De</Text>
                <Medidas1 />
              </View>
              <View style={styles.cols}>
                {/* <Text style={styles.labelComponent}>para:</Text> */}
                <Text style={styles.smallLabelComponent}>Para</Text>
                <Medidas2 />
              </View>
            </View>
            <View style={{flex:2, flexDirection:'column', alignItems: 'center'}}>
              <Text style={{fontSize:20, color:'#000'}}>{strIngrediente}</Text>
            </View>
            <View style={{flex:2, marginLeft:10, marginRight:10, marginTop:10, flexDirection:'row', alignItems: 'center'}}>
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
            <View style={{flex:2, flexDirection:'column', alignItems: 'center'}}>
              <Text style={styles.labelComponent}>{strMedidaFrom}</Text>
            </View>

            <View style={{flex:2, height:20}} />
            <View style={{flex:2, flexDirection:'column', alignItems: 'center'}}>
              <Text style={styles.labelComponent}>=</Text>
            </View>

            <View style={{flex:2, padding:5, margin:10, flexDirection:'row', alignItems: 'center', borderWidth:1, borderColor:'#DC7F9B'}}>
              <View style={{flex:2, width: '100%', marginTop: 0, alignItems: 'center'}}>
                <Text style={{fontSize:20, color:'#DC7F9B'}}>{this.props.resultado} {strMedidaTo}</Text>
              </View>
            </View>
            


          </KeyboardAwareScrollView>
        </View>     
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

