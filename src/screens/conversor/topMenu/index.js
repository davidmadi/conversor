import React, { Component } from "react";
import { Image, ScrollView } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
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
    let wid = this.props.allIngredientes.length * 40;
    return (
      <View style={{zIndex:20}}>
        <Text tab note>aa</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={{zIndex:20, width:wid, height:50, flexDirection:"row"}}>
            {this.props.allIngredientes.map(ingrediente => {
              return (
                <View key={ingrediente.nome + ingrediente.selecionado}>
                  <Icon
                    active
                    name="log-in"
                    style={{ zIndex:20, color: "#FFF", fontSize: 20, width: 30 }}
                  />
                  <Text tab title invert note style={{zIndex:20}}>
                    {ingrediente.nome}
                  </Text>
                </View>
              );
            })}
            <Text tab note>bbb</Text>
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
