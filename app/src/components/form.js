import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import colores from '../utils/colores';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

export default function Form(){
    return (
        <View style={estilo.formulario}>
            
            <View style={estilo.rowInput}>
                <TextInput
                    style={estilo.input}
                    placeholder="Cantidad"
                />
                <TextInput
                    style={[estilo.input, estilo.inputPersonalizado]}
                    placeholder="Interes"
                />
            </View>

            <View>
                <RNPickerSelect
                    // placeholder="Hola"
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: '3 meses', value: '3' },
                        { label: '6 meses', value: '6' },
                        { label: '12 meses', value: '12' },
                        { label: '24 meses', value: '24' },
                    ]}        
                    // style={pickerSelectStyles}
                    style={pickerSelectStyles}

                    useNativeAndroidPickerStyle={false}
                    // Icon={() => {
                    //     return <Ionicons name="md-arrow-down" size={24} color="gray" />;
                    // }}
                />
            </View>
                

        </View>
    )
}

const estilo = StyleSheet.create({
  formulario: {
      position: "absolute",
      bottom: 0,
      width: "85%",
      paddingHorizontal: 50,
      backgroundColor: colores.COLOR_BLANCO,
      borderRadius: 20,
      height: 100,
      justifyContent: 'center',

  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 0,
    width: "80%",
    marginRight: 5, 
    marginLeft: -37,
    marginBottom: 10,
    color: "#000",
    borderRadius: 5,
    borderColor: 'purple',
    // borderLeftColor: 'transparent',
    // borderRightColor: 0,
    // borderTopColor: 0,
    paddingHorizontal: 20,
    fontSize: colores.FONT_TAMANIO
  },
  inputPersonalizado:{
      width: "50%",
      marginLeft: 5
      
  },
  rowInput: {
      flexDirection: "row",
    //   height: 80
    //   paddingHorizontal: 20
      //   position: "a"
    //   marginRight: 30
    //   borderColor: "red"
  }
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
    //   fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: colores.FONT_TAMANIO,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: 'purple',
      color: 'black',
      backgroundColor: '#fff',
      borderRadius: 5,
    //   borderLeftColor: 0,
      paddingRight: 30 // to ensure the text is never behind the icon
    },
  });