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
    this.state = {medida2: this.conversor.getMedidas()[0]}
  }
  // Medida 1
  updateMedida2(medida2){
    this.setMedidaTo(this, medida2);
  }

  render() {
    return (
      <Picker 
        selectedValue={this.state.medida2} 
        onValueChange={this.updateMedida2} 
        style={styles.selectMedidas}>
        {this.conversor.getMedidas().map(c => {
          return(<Picker.Item key={c} label={c.nome} value={c} />);
        })}
      </Picker>
    )
  }
}

const styles = StyleSheet.create({
  selectMedidas:{
    width: deviceWidth * 0.45,
    backgroundColor: '#FFF'
  }
})


const mapStateToProps = (allReducers) => ({
  medidaFrom : allReducers.conversorReducer.medidaFrom,
});

const mapDispatchToProps  = (dispatch) => ({
  setMedidaTo :(_this, medida)=> {
    ConversorAction.setMedidaTo(dispatch, _this, medida);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Medidas2);
