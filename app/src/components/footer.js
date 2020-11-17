import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import colores from '../utils/colores';
// import RNPickerSelect from 'react-native-picker-select';
// import { Ionicons } from '@expo/vector-icons';

export default function Footer() {
    return (
        <View>
            <View style={estilo.boton}>
                <Button
                    // onPress={this.buttonClickListener}
                    title="CALCULAR"
                    color="purple"
                />
            </View> 
            
            {/* <TouchableOpacity > */}
                {/* <Button
                    // onPress={onPressLearnMore}
                    title="CALCULAR"
                    color="purple"
                    // width="300"
                    accessibilityLabel="Learn more about this purple button"
                /> */}
            {/* </TouchableOpacity> */}
            {/* <Text>
                Hola FOOTER
            </Text> */}
        </View>
    )
}

const estilo = StyleSheet.create({
    boton: {
        width: 200,
        height: 400,
        marginTop: 10
    }
})
