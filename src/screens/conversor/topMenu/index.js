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
      <View style={{backgroundColor:'transparent', marginTop:2}}>
        <ScrollView 
          horizontal={true}
          style={{zIndex:20, backgroundColor:'transparent', height:100}}>
            {this.props.allIngredientes.map(ingrediente => {
              return (
                <Item key={ingrediente.nome + ingrediente.selecionado}
                  style={{margin:0}}
                  onPress={() => this.props.setIngrediente(this, ingrediente)}>
                  <View
                    style={{zIndex:20, width:80, height:80, borderWidth:0, borderColor:'#000'}}>
                    <ImageBackground
                        active
                        source={ingrediente.imagem}
                        style={{ marginLeft:15, zIndex:20,  width:50, height:50}}>
                    </ImageBackground>
                    <Text title invert note style={{ fontSize:ingrediente.fontSize, width:80, textAlign:'center', color: "#000", zIndex:20}}>
                        {ingrediente.nome}
                      </Text>
                  </View>
                </Item>
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
