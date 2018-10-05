import React from 'react'
import { Dimensions,StyleSheet, Picker } from 'react-native'
import Conversor from '../../library/conversor/index';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

class Medidas1 extends React.Component {

  constructor(props){
    super(props);
    this.updateMedida1 = this.updateMedida1.bind(this);
    this.conversor = new Conversor();
    this.state = {medida1: ''}
  }
  // Medida 1
  updateMedida1(medida1){
    this.setState({ medida1: medida1 })
  }

  render() {
    return (
      <Picker 
        selectedValue={this.state.medida1} 
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
    backgroundColor: '#FFF'
  }
})


export default Medidas1;