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
import ResourceAction from '../../../library/actions/resource';

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
              var selected = ( this.props.ingrediente &&  ingrediente.nome == this.props.ingrediente.nome );
              var notSelectedStyle = { marginLeft:15, zIndex:20,  width:50, height:50};
              var selectedStyle = {borderWidth:1, borderColor:'#000', marginLeft:15, zIndex:20,  width:50, height:50};
              var styleItem = (selected) ? selectedStyle :notSelectedStyle;

              return (
                <Item key={ingrediente.nome + ingrediente.selecionado}
                  style={{margin:0}}
                  onPress={() => this.props.setIngrediente(this, ingrediente)}>
                  <View
                    style={{zIndex:20, width:80, height:80, borderWidth:0, borderColor:'#000'}}>
                    <ImageBackground
                        active
                        source={ingrediente.imagem}
                        style={styleItem}>
                    </ImageBackground>
                    <Text title invert note style={{ fontSize:ingrediente.fontSize, width:80, textAlign:'center', color: "#000", zIndex:20}}>
                        {ResourceAction.message(ingrediente.nome, this.props.languageReducer)}
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
  languageReducer : allReducers.languageReducer
});


const mapDispatchToProps  = (dispatch) => ({
  setIngrediente : (_this, ingrediente) => {     
    ConversorAction.setIngrediente(dispatch, _this, ingrediente);
    if (_this.props.onChoose)
      _this.props.onChoose(ingrediente);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);
