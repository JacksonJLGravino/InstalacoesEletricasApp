import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Estilos } from '../estilo/Estilos';

export function BotaoComodo({title, onPress}) {
  return (
      <View>
      <TouchableOpacity style={styles.containerBotao} onPress={onPress}>
          <Text style={styles.title}>{title}</Text>
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