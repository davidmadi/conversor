import React from 'react'
import { Dimensions,StyleSheet, ScrollView } from 'react-native'
import { connect } from "react-redux";
import Conversor from '../../library/conversor/index';
import ConversorAction from '../../library/actions/conversor';
import ResourceAction from '../../library/actions/resource';
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Item,
  Left,
  Right,
  View,
  Button
} from "native-base";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const mWidth = deviceWidth * 0.49;

class Medidas2 extends React.Component {

  constructor(props){
    super(props);
    this.updateMedida2 = this.updateMedida2.bind(this);
    this.conversor = new Conversor();
  }

  componentDidMount(){
    this.props.setMedidaTo(this, this.conversor.getMedidas()[1]);
  }

  // Medida 1
  updateMedida2(nomeMedida){
    let medidaEscolhida = this.conversor.getMedidas().find(m => m.nome == nomeMedida);
    this.props.setMedidaTo(this, medidaEscolhida);
  }

  render() {
    let medidaNome = (this.props.medidaTo) ? this.props.medidaTo.nome : null;
    return (
      <View style={{borderWidth:2, borderRadius:5, borderColor:'#aee8d2', backgroundColor:'transparent', height:230, width:mWidth, marginTop:0}}>
        <ScrollView 
          horizontal={false}
          vertical={true}
          showsVerticalScrollIndicator={true}
          style={{zIndex:20, padding:1, height:20}}>
            {this.conversor.getMedidas().map(c => {
              let backColor = (c.nome == medidaNome) ? '#DC7F9B' : "#b5b5b5";

              return(
                <Item key={c.nome}
                  style={{margin:0, width:mWidth, height:70}}
                  >
                  <View style={{width:mWidth*0.9,zIndex:20}}>
                    <Button rounded style={{alignSelf:"center", backgroundColor:backColor}}
                      onPress={() => this.updateMedida2(c.nome)}>
                      <Text title invert note style={{ marginTop:5, marginBottom:5, fontSize:15, textAlign:'center', color: "#000", zIndex:20}}>
                        {ResourceAction.message(c.nome, this.props.languageReducer)}
                      </Text>
                    </Button>
                  </View>
                </Item>                
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  selectMedidas:{
    width: deviceWidth * 0.45,
    backgroundColor: 'transparent'
  }
})


const mapStateToProps = (allReducers) => ({
  medidaTo : allReducers.conversorReducer.medidaTo,
  languageReducer : allReducers.languageReducer
});

const mapDispatchToProps  = (dispatch) => ({
  setMedidaTo :(_this, medida)=> {
    ConversorAction.setMedidaTo(dispatch, _this, medida);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Medidas2);
