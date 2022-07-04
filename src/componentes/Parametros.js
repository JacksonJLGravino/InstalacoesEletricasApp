import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Estilos } from "../estilo/Estilos";
import { SmallInput } from "./SmallInput";

export function Parametros({onChangeText, value, onEndEditing, text,unidade}){
    return(
        <View style={styles.parametrosIndividual}>
            <Text style={styles.detalhe}>{text}</Text>
            <SmallInput onChangeText={onChangeText} value={value} onEndEditing={onEndEditing} />
            <Text style={styles.detalhe}>{unidade}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    parametrosIndividual:{
        flexDirection: 'row',
        marginRight: 30,
        alignItems: 'center',
      },
    detalhe:{
        color: Estilos.cores.detalheEscuro
    }
  });