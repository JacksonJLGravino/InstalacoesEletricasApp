import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { Estilos } from "../estilo/Estilos";

export function SmallInput({onChangeText, placeholder, value, onEndEditing}){
    return(
        <TextInput 
            style={styles.container}
            keyboardType="numeric"
            onChangeText={onChangeText}
            placeholder={placeholder}
            value={value}
            onEndEditing={onEndEditing}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        width:40,
        textAlign: 'left',
        borderBottomWidth: 2,
        borderColor: Estilos.cores.primarioClaro,
        color: Estilos.cores.detalheClaro,
        paddingHorizontal: 2,
        marginBottom: 5,
      }
  });