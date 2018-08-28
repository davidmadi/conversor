import React from 'react'
import { Dimensions,StyleSheet, Picker } from 'react-native'

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

class Medidas1 extends React.Component {
    state = {medida1: ''}
    // Medida 1
    updateMedida1 = (medida1)=>{
        this.setState({ medida1: medida1 })
    }
    render() {
        return (
            <Picker selectedValue={this.state.medida1} onValueChange={this.updateMedida1} style={styles.selectMedidas}>
                <Picker.Item label="Gramas" value="gramas" />
                <Picker.Item label="Quilo" value="quilo" />
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