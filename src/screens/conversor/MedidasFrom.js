import React from 'react'
import { Dimensions,StyleSheet, ScrollView } from 'react-native'
import { connect } from "react-redux";
import Conversor from '../../library/conversor/index';
import ConversorAction from '../../library/actions/conversor';
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

class Medidas1 extends React.Component {

  constructor(props){
    super(props);
    this.updateMedida1 = this.updateMedida1.bind(this);
    this.conversor = new Conversor();
  }

  componentDidMount(){
    this.props.setMedidaFrom(this, this.conversor.getMedidas()[0]);
  }

  // Medida 1
  updateMedida1(nomeMedida){
    let medidaEscolhida = this.conversor.getMedidas().find(m => m.nome == nomeMedida);
    this.props.setMedidaFrom(this, medidaEscolhida);
  }

  render() {
    let medidaNome = (this.props.medidaFrom) ? this.props.medidaFrom.nome : null;
    return (
      <View style={{borderWidth:2, borderRadius:5, borderColor:'#aee8d2', backgroundColor:'transparent', height:230, width:mWidth, marginTop:0}}>
        <ScrollView 
          horizontal={false}
          vertical={true}
          showsVerticalScrollIndicator={true}
          style={{zIndex:20, padding:1, height:20}}>
            {this.conversor.getMedidas().map(c => {
              let backColor = (c.nome == medidaNome) ? '#aee8d2' : "#b5b5b5";

              return(
                <Item key={c.nome}
                  style={{margin:0, width:mWidth, height:70}}
                  >
                  <View style={{width:mWidth*0.9,zIndex:20}}>
                    <Button rounded style={{alignSelf:"center", backgroundColor:backColor}}
                      onPress={() => this.updateMedida1(c.nome)}>
                      <Text title invert note style={{ marginTop:5, marginBottom:5, fontSize:15, textAlign:'center', color: "#000", zIndex:20}}>
                        {c.nome}
                      </Text>
                    </Button>
                  </View>
                </Item>                
              );
            })}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  selectMedidas:{
    width: deviceWidth * 0.45,
    backgroundColor: 'transparent',
  }
})


const mapStateToProps = (allReducers) => ({
  medidaFrom : allReducers.conversorReducer.medidaFrom,
});

const mapDispatchToProps  = (dispatch) => ({
  setMedidaFrom :(_this, medida)=> {
    ConversorAction.setMedidaFrom(dispatch, _this, medida);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Medidas1);
