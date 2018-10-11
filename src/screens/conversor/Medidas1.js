import React from 'react'
import { Dimensions,StyleSheet, Picker } from 'react-native'
import { connect } from "react-redux";
import Conversor from '../../library/conversor/index';
import ConversorAction from '../../library/actions/conversor';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

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
      <Picker 
        selectedValue={medidaNome} 
        onValueChange={this.updateMedida1} 
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
  medidaFrom : allReducers.conversorReducer.medidaFrom,
});

const mapDispatchToProps  = (dispatch) => ({
  setMedidaFrom :(_this, medida)=> {
    ConversorAction.setMedidaFrom(dispatch, _this, medida);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Medidas1);
