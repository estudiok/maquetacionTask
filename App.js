import { StatusBar } from 'expo-status-bar';
import React, {useState, Fragment} from 'react';
import { StyleSheet, Text, View, Button, Alert, Switch, TextInput} from 'react-native';
import ListaAlumnos from './componentes/lista-alumnos';
import colores from './app/src/utils/colores';
import Formulario from './app/src/components/form';
import Result from './app/src/components/result';

export default function App() {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // const [value, onChangeText] = React.useState('Useless Placeholder');
  return (
    // <ListaAlumnos/>
    <Fragment>
      <View style={styles.contenedorTitulo}>
        <Text style={styles.titulo}>COTIZADOR DE PRESTAMOS</Text>
        {/* <Text style={styles.titulo}>COTIZADOR DE PRESTAMOS</Text> */}
        <Formulario/>
      </View>
      <View style={[styles.contenedorTitulo, styles.contenedorPersonalizado]}>
        <Text style={styles.titulo}>RESUMEN</Text>
        <Result/>
      </View>
      <View style={[styles.contenedorTitulo, styles.contenedorFooter]}>
        <Text style={styles.estiloFooter}>Copyrigth 2020</Text>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  contenedorTitulo: {
    top: 20,
    backgroundColor: colores.COLOR_BLANCO,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    // marginTop: 25
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#000',
    marginTop: 25
    // backgroundColor: colores.COLOR_BLANCO,
  },
  contenedorPersonalizado: {
    marginTop: 4,
    // backgroundColor: colores.COLOR_BLANCO,
    // width: 40
  },
  contenedorFooter: {
    marginTop: 100
  },
  estiloFooter: {
    fontWeight: "normal",
    fontSize: 14,
    fontWeight: "bold",
    color: '#000',
    marginTop: 25
  }

});
