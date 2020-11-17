import { StatusBar } from 'expo-status-bar';
import React, {useState, Fragment} from 'react';
import { StyleSheet, Text, View, Button, Alert, Switch, TextInput} from 'react-native';
import ListaAlumnos from './componentes/lista-alumnos';
import colores from './app/src/utils/colores';
import Formulario from './app/src/components/form';


export default function App() {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // const [value, onChangeText] = React.useState('Useless Placeholder');
  return (
    // <ListaAlumnos/>
    <Fragment>
      <View style={styles.contenedorTitulo}>
        <Text style={styles.titulo}>COTIZADOR DE PRESTAMOS</Text>
        <Formulario/>
      </View>
      <View>
        <Text>Resultado</Text>
      </View>
      <View>
        <Text>Footer</Text>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  contenedorTitulo: {
    backgroundColor: colores.COLOR_OSCURO,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center"
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#fff',
    marginTop: 25 
  }
});
