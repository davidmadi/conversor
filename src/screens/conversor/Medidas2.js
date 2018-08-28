import React from 'react'
import { Dimensions,StyleSheet, Picker } from 'react-native'

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

class Medidas1 extends React.Component {
    state = {medida2: ''}
    // Medida 1
    updatemedida2 = (medida2)=>{
        this.setState({ medida2: medida2 })
    }
    render() {
        return (
            <Picker selectedValue={this.state.medida2} onValueChange={this.updatemedida2} style={styles.selectMedidas}>
                <Picker.Item label="Colher" value="colher" style={styles.selected} />
                <Picker.Item  label="Xícara" value="xicara" />
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