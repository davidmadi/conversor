import React, { Component } from "react";
import { Image, View } from "react-native";
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
    name: "Primeira",
    route: "Primeira",
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

class RightSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
    };
  }

  componentWillMount(){
  }

  render() {
    return (
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <List>
            {this.props.allMedidasFrom.map(medida => {
              let backColor = (medida.selecionado) ? 'red' : 'white';
              return (
                <ListItem key={medida.nome + medida.selecionado}
                  button
                  noBorder
                  onPress={() => this.props.setMedidaFrom(this, medida)}
                  style={{backgroundColor:backColor}}
                >
                  <Left >
                    <Icon
                      active
                      name="log-in"
                      style={{ color: "#777", fontSize: 26, width: 30 }}
                    />
                    <Text style={styles.text}>
                      {medida.nome}
                    </Text>
                  </Left>
                </ListItem>
              );
            })}
          </List>
          <View><Text>Para:</Text></View>
          <List>
            {this.props.allMedidasTo.map(medida => {
              let backColor = (medida.selecionado) ? 'red' : 'white';
              return (
                <ListItem key={medida.nome + medida.selecionado}
                  button
                  noBorder
                  onPress={() => this.props.setMedidaTo(this, medida)}
                  style={{backgroundColor:backColor}}
                >
                  <Left >
                    <Icon
                      active
                      name="log-in"
                      style={{ color: "#777", fontSize: 26, width: 30 }}
                    />
                    <Text style={styles.text}>
                      {medida.nome}
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
  medidaFrom : allReducers.conversorReducer.medidaFrom,
  medidaTo : allReducers.conversorReducer.medidaTo,
  quantidade : allReducers.conversorReducer.quantidade,
  resultado : allReducers.conversorReducer.resultado,
  allMedidasFrom : allReducers.conversorReducer.allMedidasFrom,
  allMedidasTo :allReducers.conversorReducer.allMedidasTo,
});


const mapDispatchToProps  = (dispatch) => ({
  setMedidaFrom : (_this, medida) => {     
    ConversorAction.setMedidaFrom(dispatch, _this, medida);
  },
  setMedidaTo : (_this, medida) => {     
    ConversorAction.setMedidaTo(dispatch, _this, medida);    

    if (_this.props.onChooseTo)
      _this.props.onChooseTo(medida);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RightSide);
