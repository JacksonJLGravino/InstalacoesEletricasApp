import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Estilos } from '../estilo/Estilos';
import { AntDesign } from '@expo/vector-icons';

export function Compartilhar({antIconName, onPress}) {
  return (
      <View>
      <TouchableOpacity style={styles.containerBotao} onPress={onPress}>
        <AntDesign 
            name={antIconName} 
            size={24} 
            style={[styles.title]} 
        />
      </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  containerBotao: {
    backgroundColor: Estilos.cores.primarioClaro,
    width: 76,
    height: 40,   
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5
  },
  title: {
    color: 'white',
  }
});