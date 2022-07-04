import React from 'react';
import { StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Estilos } from '../estilo/Estilos';

export function BotaoCircular({antIconName, style, onPress}) {
  return (
    <AntDesign 
        name={antIconName} 
        size={24} 
        style={[styles.icon, {...style}]} 
        onPress = {onPress}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    padding: 10,
    marginHorizontal: 5,
    color: Estilos.cores.primarioClaro,
  },
});
