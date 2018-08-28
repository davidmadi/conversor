import React from 'react'
import { StyleSheet, Picker } from 'react-native'

class Ingredientes extends React.Component {
    state = {ingrediente: ''}
    updateIngrediente = (ingrediente)=>{
        this.setState({ ingrediente: ingrediente })
    }
    render() {
        return (
            <Picker selectedValue={this.state.ingrediente} onValueChange={this.updateIngrediente} style={styles.select}>
                <Picker.Item label="Açúcar" value="acucar" />
                <Picker.Item label="Café" value="cafe" />
            </Picker> 
        )
    }
}

const styles = StyleSheet.create({
    select:{
        width: '98%',
        height: 50,
        backgroundColor: '#FFF'
    }
})

export default Ingredientes;