import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons'
import { Estilos } from "../estilo/Estilos";

export function NotFound() {
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
            <AntDesign name="frowno" size={90} color= {Estilos.cores.detalheClaro} />
            <Text style={{marginTop: 20, fontSize: 20, color: Estilos.cores.detalheClaro}}>resultado não encontrado</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1,
    }
})