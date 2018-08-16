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

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

class Home extends Component {

  constructor(){
    super();
    this.state = {
      loading:false
    };
    this.onChooseLeft = this.onChooseLeft.bind(this);
    this.onChooseRightFrom = this.onChooseRightFrom.bind(this);
    this.onChooseRightTo = this.onChooseRightTo.bind(this);
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
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={{height:20}} />
          <TopMenu />
          <View style={{flex:2}}>
            <Button
                style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
                onPress={() => this.openLeft()}
              >
              <Text>{strIngrediente}</Text>
            </Button>
          </View>
          <View full style={{flex:1,flexDirection:"row", height:40}}>
            <View half>
              <Item third rounded quantity>
                <MaterialCommunityIcons name="numeric" size={20} color="white" />
                <Input invert quantity placeholder="" value={this.props.quantidade} 
                  keyboardType={'numeric'}
                  onChangeText={(text) => this.props.setQuantidade(this, text)} />
              </Item>
            </View>
            <View half>
              <Button
                  style={{ flex:1, backgroundColor: "#6FAF98", alignSelf: "center" }}
                  onPress={() => this.openRight()}
                >
                <Text invert>{strMedidaFrom}</Text>
              </Button>
            </View>
          </View>
          <View
            style={{
              flex:1,
              alignItems: "center",
              backgroundColor: "transparent"
            }}>
            <View style={{height:20}} />
            <Text title style={styles.text}>{is}</Text>
            <View style={{ marginTop: 20 }} />
            
          </View>
          <View full style={{flex:1,flexDirection:"row", height:40}}>
            <View half style={{
              flex:1,
              alignItems: "center",
              marginTop:30
              }}>
              <Text tab invert title>XX{this.props.resultado}</Text>
            </View>
            <View half>
              <Button
                  style={{ flex:1, backgroundColor: "#6FAF98", alignSelf: "center" }}
                  onPress={() => this.openRight()}
                >
                <Text button invert>{strMedidaTo}</Text>
              </Button>
            </View>
          </View>
          <View style={{flex:1}}/>
        </ImageBackground>
      </Container> );

    return (
      <MySidebar 
        contentView={ content }
        leftView={<LeftSide onChoose={this.onChooseLeft}/>}
        rightView={<RightSide onChooseFrom={this.onChooseRightFrom} onChooseTo={this.onChooseRightTo}/>}
        ref={(ref) => this._mysidebar = ref}
      />

    );
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
