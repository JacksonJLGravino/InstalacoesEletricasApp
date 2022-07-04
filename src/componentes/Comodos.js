import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import { Estilos } from "../estilo/Estilos";
import { BotaoCircular } from "./BotaoCircular";

const Comodos = ({item, onPress, onPress2}) => {
  const {detalhes, title, largura, comprimento, iluminacao, potenciaMin, tug, tug2, potenciaMin2, somaTug, espesifico, potenciaTugTotal} = item
  
  return(
    <View style={styles.saveCard}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.descricao}>{detalhes}</Text>
        <Text style={styles.texto}>Dimensões: {largura}m x {comprimento}m</Text>
        <Text style={styles.texto}>Iluminação = {iluminacao}VA</Text>
        <Text style={styles.texto}>Tomadas de uso geral = {tug} , {potenciaMin}VA</Text>
        { tug2 != 0 ?
          <Text style={styles.texto}>Tomadas de uso geral = {tug2} , {potenciaMin2}VA</Text>
          : null
        }
        <Text style={styles.texto}>Tomadas de uso geral Total = {somaTug} , {potenciaTugTotal}VA</Text>

        { espesifico != '' ?
        <View>
        <Text style={styles.texto}>Tomadas de uso específico:</Text>
          {espesifico.map(function(val) {
              return(
                  <Text style={styles.texto2}>
                      {val}
                  </Text>
              )
          })}
        </View>
        : null
        }
      </View>
        
      <View style={{flexDirection: 'row'}}>
        <BotaoCircular onPress={onPress} antIconName='delete' />
        <BotaoCircular onPress={onPress2} antIconName='sharealt' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  saveCard:{
    marginTop: 25,
    marginHorizontal: 35,
    padding: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Estilos.cores.primarioClaro,
  },
  title:{
    fontSize: 16,
    color: Estilos.cores.detalheEscuro,
  },
  descricao:{
    fontSize: 12,
    color: Estilos.cores.detalheEscuro,
    textAlign: 'justify',
  },
  texto: {
    color: Estilos.cores.detalheEscuro,
  },
  texto2:{
    color: Estilos.cores.detalheEscuro,
    fontSize: 12,
  }
})

export default Comodos;

/*
'Cozinha'+ '\n'+
        detalhes + '\n' +
        'Dimensões = ' + largura + 'm x ' + comprimento + 'm' +'\n'+
        'Iluminção = ' + iluminacao + 'VA' + '\n' +
        'Tomadas de uso geral = ' + tug + ' , ' + potenciaMin + 'VA' + '\n' +
        'Tomadas de uso geral = ' + tug2 + ' , ' + potenciaMin2 + 'VA' + '\n' +
        'Tomadas de uso geral Total = ' + somaTug + ' , ' + potenciaTugTotal + 'VA' +'\n'+
        'Tomada de uso espesífico (TUE):' + 
        espesifico 

        */