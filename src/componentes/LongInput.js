import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import { Estilos } from "../estilo/Estilos";

export function LongInput({onChangeText, keyboardType, text, unidade}){
  return(
    <View style={styles.parametrosIndividual}>
      <Text style={styles.detalhe}>{text}</Text>
        <TextInput 
          style={styles.container}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          autoFocus={true}
        />
      <Text style={styles.detalhe}>{unidade}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:100,
        textAlign: 'left',
        borderBottomWidth: 2,
        borderColor: Estilos.cores.primarioClaro,
        color: Estilos.cores.detalheClaro,
        paddingHorizontal: 2,
        marginBottom: 10,
      },
      parametrosIndividual:{
        flexDirection: 'row',
        alignItems: 'center',
      },
    detalhe:{
        color: Estilos.cores.detalheEscuro
    }
  });