import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import { connect } from "react-redux";
import ConversorAction from '../../../library/actions/conversor';

import styles from "./style";


const datas = [
  {
    name: "Anatomy",
    route: "Anatomy",
    icon: "phone-portrait",
    bg: "#C5F442"
  },
  {
    name: "Conversor",
    route: "Conversor",
    icon: "phone-portrait",
    bg: "#C5F442"
  },
]

class LeftSide extends Component {
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
    return (
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <List>
            {this.props.allIngredientes.map(ingrediente => {
              let backColor = (ingrediente.selecionado) ? 'red' : 'white';
              return (
                <ListItem key={ingrediente.nome + ingrediente.selecionado}
                  button
                  noBorder
                  onPress={() => this.props.setIngrediente(this, ingrediente)}
                  style={{backgroundColor:backColor}}>
                  <Left >
                    <Icon
                      active
                      name="log-in"
                      style={{ color: "#777", fontSize: 26, width: 30 }}
                    />
                    <Text style={styles.text}>
                      {ingrediente.nome}
                    </Text>
                  </Left>
                </ListItem>
              );
            })}
          </List>
        </Content>
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftSide);
