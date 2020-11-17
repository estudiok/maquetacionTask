import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import colores from '../utils/colores';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

export default function Result() {
    return (
        <View style={estilo.resumen}>

            <View style={estilo.rowInput}>
                <Text style={estilo.texto}>Cantidad Solicitada</Text>
                <Text style={[estilo.texto, estilo.textoPersonalizado]}>1000 bs</Text>
            </View>
            <View style={estilo.paddingView} />
            <View style={estilo.rowInput}>
                <Text style={estilo.texto}>Interes</Text>
                <Text style={[estilo.texto, estilo.textoPersonalizado]}>5%</Text>
            </View>
            <View style={estilo.paddingView} />
            <View style={estilo.rowInput}>
                <Text style={estilo.texto}>Plazos</Text>
                <Text style={[estilo.texto, estilo.textoPersonalizado]}>12 meses</Text>
            </View>
            <View style={estilo.paddingView} />
            <View style={estilo.rowInput}>
                <Text style={estilo.texto}>Pago Mensual</Text>
                <Text style={[estilo.texto, estilo.textoPersonalizado]}>87.5 Bs</Text>
            </View>
            <View style={estilo.paddingView} />
            <View style={estilo.rowInput}>
                <Text style={estilo.texto}>Total a pagar</Text>
                <Text style={[estilo.texto, estilo.textoPersonalizado]}>1050 Bs</Text>
            </View>


        </View>
    )
}

const estilo = StyleSheet.create({
    resumen: {
        position: "absolute",
        bottom: 0,
        width: "85%",
        paddingHorizontal: 55,
        backgroundColor: colores.COLOR_BLANCO,
        borderRadius: 20,
        height: 130,
        backgroundColor: colores.COLOR_BLANCO
    },
    texto: {
        marginLeft: -84,
        marginTop: 10,
        paddingHorizontal: 40,
        paddingRight: 30,
        position: "absolute",
        fontSize: 12.5
    },
    textoPersonalizado: {
        // marginLeft: -84,
        marginTop: 10,
        paddingHorizontal: 40,
        marginLeft: 120,
    },
    rowInput: {
        flexDirection: "row"
    },
    paddingView: {
        paddingVertical: 19
    }
})