import React, { Component } from "react";
import { ImageBackground, ScrollView } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Item,
  Left,
  Right,
  View
} from "native-base";
import { connect } from "react-redux";
import ConversorAction from '../../../library/actions/conversor';

class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      ingredientes : []
    };
  }

  componentWillMount(){
    this.state.ingredientes = this.props.conversor.getIngredientes();
  }

  render() {
    let wid = this.props.allIngredientes.length * 100;
    return (
      <View style={{backgroundColor:'transparent'}}>
        <ScrollView 
          horizontal={true}
          style={{zIndex:20,backgroundColor:'transparent', height:81}}>
            {this.props.allIngredientes.map(ingrediente => {
              return (
                <View key={ingrediente.nome + ingrediente.selecionado}
                style={{zIndex:20, width:80, height:81}}>
                  <Item style={{borderColor:'#000', borderWidth:1, alignContent:'center', alignItems:'center', flexDirection:"column"}}
                    onPress={() => this.props.setIngrediente(this, ingrediente)}>
                    <ImageBackground
                      active
                      src
                      source={ingrediente.imagem}
                        style={{ zIndex:20, color: "#000", fontSize: 20, width:49, top:5, height:50}}>
                      <Text title invert note style={{top:ingrediente.top, textAlign:'center', color: "#000", zIndex:20}}>
                        {ingrediente.nome}
                      </Text>
                    </ImageBackground>
                  </Item>
                </View>
              );
            })}
        </ScrollView>
      </View>
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
});


const mapDispatchToProps  = (dispatch) => ({
  setIngrediente : (_this, ingrediente) => {     
    ConversorAction.setIngrediente(dispatch, _this, ingrediente);
    if (_this.props.onChoose)
      _this.props.onChoose(ingrediente);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);
