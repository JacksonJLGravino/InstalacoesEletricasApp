import React from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { BotaoComodo } from './BotaoComodo';

export function ComodoSelect({onPressSala, onPressBanheiro, onPressCozinha, onPressQuarto, onPressCopa, onPressVaranda, onPressLavanderia}) {
  return (
    <View>
      <ScrollView horizontal contentContainerStyle={styles.enviromentList}>
        <BotaoComodo title="Sala" onPress={onPressSala}/>
        <BotaoComodo title="Banheiro" onPress={onPressBanheiro}/>
        <BotaoComodo title="Cozinha" onPress={onPressCozinha}/>
        <BotaoComodo title="Quarto" onPress={onPressQuarto}/>
        <BotaoComodo title="Copa" onPress={onPressCopa}/>
        <BotaoComodo title="Varanda" onPress={onPressVaranda}/>
        <BotaoComodo title="Lavanderia" onPress={onPressLavanderia}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 16,
    paddingRight: 32
},
});