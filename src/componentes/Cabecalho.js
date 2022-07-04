import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { BotaoCircular } from "./BotaoCircular";

export function Cabecalho({onPress, title, onPress2, onPress3}){
  return(
    <View style={styles.header}>
      <View>
        <BotaoCircular onPress={onPress} antIconName='arrowleft'/>
      </View>

      <View>
        <Text style={{marginLeft: 15, fontSize: 24}}>{title}</Text>
      </View>
            
      <View style={{flexDirection: 'row'}}>
        <BotaoCircular onPress={onPress2} antIconName='save'/>
        <BotaoCircular onPress={onPress3} antIconName='sharealt'/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    header: {
      alignItems: 'center',
      justifyContent:'space-between',
      marginVertical: 8,
      marginHorizontal: 10,
      flexDirection: 'row',
    },
})