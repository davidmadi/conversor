import React from 'react'
import { Dimensions,StyleSheet, Picker } from 'react-native'
import { connect } from "react-redux";
import Conversor from '../../library/conversor/index';
import ConversorAction from '../../library/actions/conversor';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

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
      <Picker 
        selectedValue={medidaNome} 
        onValueChange={this.updateMedida2} 
        style={styles.selectMedidas}>
        {this.conversor.getMedidas().map(c => {
          return(<Picker.Item key={c} label={c.nome} value={c.nome} />);
        })}
      </Picker>
    )
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
});

const mapDispatchToProps  = (dispatch) => ({
  setMedidaTo :(_this, medida)=> {
    ConversorAction.setMedidaTo(dispatch, _this, medida);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Medidas2);
