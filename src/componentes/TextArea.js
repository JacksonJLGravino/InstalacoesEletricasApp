import React from "react";
import {View, TextInput, Text, StyleSheet} from 'react-native';
import { Estilos } from "../estilo/Estilos";

export function TextArea({onChangeText}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes do cômodo:</Text>
            <TextInput 
                style={styles.text} 
                multiline
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 10,
    },
    text:{
        width: '100%',
        height: 70,
        borderRadius: 12,
        fontSize: 13,
        marginRight: 4,
        borderWidth: 1,
        borderColor: Estilos.cores.detalheClaro,
        color: 'white',
        paddingHorizontal: 12,
        paddingVertical: 10,
        textAlignVertical: 'top',
        backgroundColor: Estilos.cores.primarioClaro,
    },
    title:{
        fontSize: 17,
        color: Estilos.cores.detalheEscuro,
    }
  })