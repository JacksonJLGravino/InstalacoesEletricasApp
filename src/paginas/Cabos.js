import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, Text, View, Share } from 'react-native';
import { SmallInput } from '../componentes/SmallInput';
import {Picker} from '@react-native-picker/picker';
import { Estilos } from '../estilo/Estilos';
import { BotaoComodo } from '../componentes/BotaoComodo';
import { Compartilhar } from '../componentes/Compartilhar';


export function Cabos() {
  const tensao = ['127','220']
  const [tensaoEscolhida, setTensaoEscolhida] = useState('127')
  const tipos = ['Iluminação', 'Tomada']
  const [tipo, setTipo] = useState('Iluminação')
  const cabosCarregados= ['2','3']
  const [cabosCarregadosEscolhidos, setCabosCarregadosEscolhidos] = useState('2')
  const numeroDeCircuitos = ['1','2','3','4','5','6','7','8','9-11','12-15','16-19','20 ou mais']
  const [numeroDeCircuitosEscolhido, setNumeroDeCircuitosEscolhido] = useState('1')
  const [potencia, setPotencia] = useState(0)
  const [diametro, setDiametro] = useState('')
  const [novaPotencia, setNovaPotencia] = useState('')
  const [correnteDeProjeto, setCorrenteDeProjeto] = useState(0)

  const t = parseFloat(tensaoEscolhida)
  const p = parseFloat(potencia)
  const potenciaDeProjeto = p/t

  const Dimencionar = () => {
    if(numeroDeCircuitosEscolhido === '1') {
      let item = 1
      Comparar(item);
    }
    if(numeroDeCircuitosEscolhido === '2') {
      let item = 0.8
      Comparar(item);
    }
    if(numeroDeCircuitosEscolhido === '3'){
      let item = 0.7
      Comparar(item);
    }
    if(numeroDeCircuitosEscolhido === '4') {
      let item = 0.65
      Comparar(item);
    }
    if(numeroDeCircuitosEscolhido === '5') {
      let item = 0.6
      Comparar(item);
    }
    if(numeroDeCircuitosEscolhido === '6') {
      let item = 0.57
      Comparar(item);
    }
    if(numeroDeCircuitosEscolhido === '7') {
      let item = 0.54
      Comparar(item);
    }
    if(numeroDeCircuitosEscolhido === '8') {
      let item = 0.52
      Comparar(item);
    }
    if(numeroDeCircuitosEscolhido === '9-11') {
      let item = 0.5
      Comparar(item);
    }
    if(numeroDeCircuitosEscolhido === '12-15') {
      let item = 0.45
      Comparar(item);
    }
    if(numeroDeCircuitosEscolhido === '16-19') {
      let item = 0.41
      Comparar(item);
    }
    if(numeroDeCircuitosEscolhido === '20 ou mais') {
      let item = 0.38
      Comparar(item);
    }
  }

  const Comparar = (item) => {
    let val = potenciaDeProjeto/item
    setCorrenteDeProjeto(val)
    if (cabosCarregadosEscolhidos === '2'){
      if (tipo === 'Iluminação' & val < 17) setDiametro(' 1.5mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 17A')
      else if (val < 24) setDiametro(' 2.5mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 24A')
      else if (val < 32) setDiametro(' 4mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 32A')
      else if (val < 41) setDiametro(' 6mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 41A')
      else if (val < 57) setDiametro(' 10mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 57A')
      else if (val < 76) setDiametro(' 16mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 76A')
      else if (val < 101) setDiametro(' 25mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 101A')
      else if (val < 125) setDiametro(' 35mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 125A')
      else if (val < 159) setDiametro(' 50mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 151A')
      else if (val < 192) setDiametro(' 70mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 192A')
      else if (val < 232) setDiametro(' 95mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 232A')
      else if (val < 269) setDiametro(' 120mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 269A')
    }
    else if (cabosCarregadosEscolhidos === '3'){
      if (tipo === 'Iluminação' & val < 15) setDiametro(' 1.5mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 15A')
      else if (val < 21) setDiametro(' 2.5mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 21A')
      else if (val < 28) setDiametro(' 4mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 28A')
      else if (val < 36) setDiametro(' 6mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 36A')
      else if (val < 50) setDiametro(' 10mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 50A')
      else if (val < 68) setDiametro(' 16mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 68A')
      else if (val < 89) setDiametro(' 25mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 89A')
      else if (val < 110) setDiametro(' 35mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 110A')
      else if (val < 134) setDiametro(' 50mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 134A')
      else if (val < 171) setDiametro(' 70mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 171A')
      else if (val < 207) setDiametro(' 95mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 207A')
      else if (val < 239) setDiametro(' 120mm²'), setNovaPotencia('Entre ' + Math.round(val+0.5) + 'A e 239A')
    }
  }

  const handleShare = async () => {
    try{
      const result = await Share.share({
        message:
        'Cabo e Disjuntor'+ '\n'+
        'Tensão = ' + tensaoEscolhida + 'v' + '\n'+
        'Tipo = ' + tipo + '\n' +
        'Cabos carregados = ' + cabosCarregadosEscolhidos + '\n' +
        'Números de circuitos = ' + numeroDeCircuitosEscolhido + '\n' +
        'Potência = ' + potencia +'w' + '\n'+
        'Seção nominal = ' + diametro + '\n'+
        'Disjuntor = ' + novaPotencia
      });
    } catch (error){
      alert(error.message)
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.alinhamento}>
          <Text style={styles.title}>Tensão =</Text>
          <View style={styles.linha}>
            <Picker selectedValue={tensaoEscolhida} style={styles.picker1} onValueChange={(itemValue) => setTensaoEscolhida(itemValue)}>
              {tensao.map(item =>{return <Picker.Item label={item} value={item} key="{item}" />})}
            </Picker>
          </View>
        </View>

        <View style={styles.alinhamento}>
          <Text style={styles.title}>Tipo =</Text>
          <View style={styles.linha2}>
          <Picker selectedValue={tipo} style={styles.picker2} onValueChange={(itemValue) => setTipo(itemValue)}>
            {tipos.map(item =>{return <Picker.Item label={item} value={item} key="{item}" />})}
          </Picker>
          </View>
        </View>

        <View style={styles.alinhamento}>
          <Text style={styles.title}>Cabos Carregados =</Text>
          <View style={styles.linha}>
          <Picker selectedValue={cabosCarregadosEscolhidos} style={styles.picker1} onValueChange={(itemValue) => setCabosCarregadosEscolhidos(itemValue)}>
            {cabosCarregados.map(item =>{return <Picker.Item label={item} value={item} key="{item}" />})}
          </Picker>
          </View>
        </View>

        <View style={styles.alinhamento}>
          <Text style={styles.title}>Números de Circuitos =</Text>
          <View style={styles.linha2}>
          <Picker selectedValue={numeroDeCircuitosEscolhido} style={styles.picker2} onValueChange={(itemValue) => setNumeroDeCircuitosEscolhido(itemValue)}>
            {numeroDeCircuitos.map(item =>{return <Picker.Item label={item} value={item} key="{item}" />})}
          </Picker>
          </View>
        </View>

        <View style={styles.alinhamento}>
          <Text style={styles.title}>Potência =</Text>
          <SmallInput onChangeText={setPotencia}/>
          <Text style={styles.title}>w</Text>
        </View>
      </View>

      <View style={styles.botao}>
        <BotaoComodo title="Calcular" onPress={Dimencionar} />
        <Compartilhar onPress={handleShare} antIconName='sharealt' />
      </View>

      <View style={styles.calculo}>
        <View style={{marginBottom: 5}}>
          <Text style={styles.title}>Seção Nominal = {diametro}</Text>
          <Text style={styles.title}>Disjuntor = {novaPotencia}</Text>
        </View>
        <Text style={styles.textinho}>Condutor: Cobre - Isolação: PVC - Temperatura do condutor: 70°C - Temperatura de referencia do ambiente: 30°C</Text>
      </View >

      

      <View style={styles.calculo}>
        <Text style={styles.title}>Identificação por cor:</Text>
        <Text style={styles.textinho}>
          Neutro: Cor azul-clara {'\n'}
          Cabo de proteção (PE): Dupla coloração verde e amarela, ou apenas cor verde {'\n'}
          Condutor PEN: Cor azul-clara com anilhas verde-amarelo {'\n'}
          Condutor de fase: Qualqer cor (diferente das cores com uso espesífico) {'\n'}
        </Text>
      </View >

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
  },
  alinhamento:{
    flexDirection: 'row', 
    justifyContent:'flex-start', 
    alignItems: 'center',
    marginBottom: 8,
  },
  title:{
    fontSize: 16,
    color: Estilos.cores.detalheEscuro,
  },
  linha:{
    borderBottomWidth: 2, 
    borderColor: Estilos.cores.primarioClaro, 
    width: 80
  },
  linha2:{
    borderBottomWidth: 2, 
    borderColor: Estilos.cores.primarioClaro, 
    width: 130
  },
  picker1:{
    color: Estilos.cores.detalheEscuro, 
    width: 95,
  },
  picker2: {
    color: Estilos.cores.detalheEscuro, 
    width: 145,
  },
  calculo: {
    marginVertical: 8,
  },
  textinho:{
    fontSize: 9.5, 
    color: Estilos.cores.primarioClaro, 
    textAlign: 'justify',
  },
  botao:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
})