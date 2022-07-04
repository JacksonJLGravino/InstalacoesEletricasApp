import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View, Share } from 'react-native';
import { BotaoComodo } from '../componentes/BotaoComodo';
import { Compartilhar } from '../componentes/Compartilhar';
import { Estilos } from '../estilo/Estilos';

export function Eletroduto() {
  const caboDiametro = [0, 1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95]
  const [espesura1, setEspesura1] = useState(0)
  const [espesura2, setEspesura2] = useState(0)
  const [espesura3, setEspesura3] = useState(0)
  const [validar3, setValidar3] = useState(false)
  const [espesura4, setEspesura4] = useState(0)
  const [validar4, setValidar4] = useState(false)
  const [espesura5, setEspesura5] = useState(0)
  const [validar5, setValidar5] = useState(false)
  const [espesura6, setEspesura6] = useState(0)
  const [validar6, setValidar6] = useState(false)
  const [espesura7, setEspesura7] = useState(0)
  const [validar7, setValidar7] = useState(false)
  const [espesura8, setEspesura8] = useState(0)
  const [validar8, setValidar8] = useState(false)
  const [espesura9, setEspesura9] = useState(0)
  const [validar9, setValidar9] = useState(false)
  const [espesura10, setEspesura10] = useState(0)
  const [validar10, setValidar10] = useState(false)
  const caboQuantidade = [2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [total, setTotal] = useState(2)
  const [diametroEletroduto, setDiametroEletroduto] = useState('0')


  const todos = [];
  todos[0] = espesura1;
  todos[1] = espesura2;
  todos[2] = espesura3;
  todos[3] = espesura4;
  todos[4] = espesura5;
  todos[5] = espesura6;
  todos[6] = espesura7;
  todos[7] = espesura8;
  todos[8] = espesura9;
  todos[9] = espesura10;

  const [mudar, setMudar] = useState(true)

  function quantidadeCalculo (itemValue) {
    let t = parseInt(itemValue)
    setTotal(itemValue)
    if (t >= 3) setValidar3(true)
    else setValidar3(false), setEspesura3(0)

    if (t >= 4) setValidar4(true)
    else setValidar4(false), setEspesura4(0)

    if (t >= 5) setValidar5(true)
    else setValidar5(false), setEspesura5(0)

    if (t >= 6) setValidar6(true)
    else setValidar6(false), setEspesura6(0)

    if (t >= 7) setValidar7(true)
    else setValidar7(false), setEspesura7(0)

    if (t >= 8) setValidar8(true)
    else setValidar8(false), setEspesura8(0)

    if (t >= 9) setValidar9(true)
    else setValidar9(false), setEspesura9(0)

    if (t >= 10) setValidar10(true)
    else setValidar10(false), setEspesura10(0)
  }

  const Calcular = () => {
    let inverter = todos.sort((n1,n2) => n1 - n2);

    if (total === 2){
      if(inverter[9] <= 6) setDiametroEletroduto('16 mm')
      else if (inverter[9] <= 16) setDiametroEletroduto('20 mm')
      else if (inverter[9] <= 35) setDiametroEletroduto('25 mm')
      else if (inverter[9] <= 50) setDiametroEletroduto('32 mm')
      else if (inverter[9] <= 95) setDiametroEletroduto('40 mm')
    }
    else if (total === 3){
      if(inverter[9] <= 4) setDiametroEletroduto('16 mm')
      else if (inverter[9] <= 10) setDiametroEletroduto('20 mm')
      else if (inverter[9] <= 16) setDiametroEletroduto('25 mm')
      else if (inverter[9] <= 35) setDiametroEletroduto('32 mm')
      else if (inverter[9] <= 70) setDiametroEletroduto('40 mm')
      else if (inverter[9] <= 95) setDiametroEletroduto('50 mm')
    }
    else if (total === 4){
      if(inverter[9] <= 2.5) setDiametroEletroduto('16 mm')
      else if (inverter[9] <= 6) setDiametroEletroduto('20 mm')
      else if (inverter[9] <= 16) setDiametroEletroduto('25 mm')
      else if (inverter[9] <= 25) setDiametroEletroduto('32 mm')
      else if (inverter[9] <= 50) setDiametroEletroduto('40 mm')
      else if (inverter[9] <= 70) setDiametroEletroduto('50 mm')
      else if (inverter[9] <= 95) setDiametroEletroduto('60 mm')
    }
    else if (total === 5){
      if(inverter[9] <= 1.5) setDiametroEletroduto('16 mm')
      else if (inverter[9] <= 4) setDiametroEletroduto('20 mm')
      else if (inverter[9] <= 10) setDiametroEletroduto('25 mm')
      else if (inverter[9] <= 16) setDiametroEletroduto('32 mm')
      else if (inverter[9] <= 35) setDiametroEletroduto('40 mm')
      else if (inverter[9] <= 50) setDiametroEletroduto('50 mm')
      else if (inverter[9] <= 95) setDiametroEletroduto('60 mm')
    }
    else if (total === 6){
      if(inverter[9] <= 1.5) setDiametroEletroduto('16 mm')
      else if (inverter[9] <= 4) setDiametroEletroduto('20 mm')
      else if (inverter[9] <= 6) setDiametroEletroduto('25 mm')
      else if (inverter[9] <= 16) setDiametroEletroduto('32 mm')
      else if (inverter[9] <= 25) setDiametroEletroduto('40 mm')
      else if (inverter[9] <= 50) setDiametroEletroduto('50 mm')
      else if (inverter[9] <= 70) setDiametroEletroduto('60 mm')
      else if (inverter[9] <= 95) setDiametroEletroduto('75 mm')
    }
    else if (total === 7){
      if(inverter[9] <= 1.5) setDiametroEletroduto('16 mm')
      else if (inverter[9] <= 2.5) setDiametroEletroduto('20 mm')
      else if (inverter[9] <= 6) setDiametroEletroduto('25 mm')
      else if (inverter[9] <= 10) setDiametroEletroduto('32 mm')
      else if (inverter[9] <= 25) setDiametroEletroduto('40 mm')
      else if (inverter[9] <= 35) setDiametroEletroduto('50 mm')
      else if (inverter[9] <= 70) setDiametroEletroduto('60 mm')
      else if (inverter[9] <= 95) setDiametroEletroduto('75 mm')
    }
    else if (total === 8){
      if(inverter[9] <= 2.5) setDiametroEletroduto('20 mm')
      else if (inverter[9] <= 6) setDiametroEletroduto('25 mm')
      else if (inverter[9] <= 10) setDiametroEletroduto('32 mm')
      else if (inverter[9] <= 16) setDiametroEletroduto('40 mm')
      else if (inverter[9] <= 35) setDiametroEletroduto('50 mm')
      else if (inverter[9] <= 50) setDiametroEletroduto('60 mm')
      else if (inverter[9] <= 95) setDiametroEletroduto('75 mm')
    }
    else if (total === 9){
      if(inverter[9] <= 1.5) setDiametroEletroduto('20 mm')
      else if (inverter[9] <= 4) setDiametroEletroduto('25 mm')
      else if (inverter[9] <= 6) setDiametroEletroduto('32 mm')
      else if (inverter[9] <= 16) setDiametroEletroduto('40 mm')
      else if (inverter[9] <= 35) setDiametroEletroduto('50 mm')
      else if (inverter[9] <= 50) setDiametroEletroduto('60 mm')
      else if (inverter[9] <= 70) setDiametroEletroduto('75 mm')
      else if (inverter[9] <= 95) setDiametroEletroduto('85 mm')
    }
    else if (total === 10){
      if(inverter[9] <= 1.5) setDiametroEletroduto('20 mm')
      else if (inverter[9] <= 4) setDiametroEletroduto('25 mm')
      else if (inverter[9] <= 6) setDiametroEletroduto('32 mm')
      else if (inverter[9] <= 16) setDiametroEletroduto('40 mm')
      else if (inverter[9] <= 25) setDiametroEletroduto('50 mm')
      else if (inverter[9] <= 35) setDiametroEletroduto('60 mm')
      else if (inverter[9] <= 70) setDiametroEletroduto('75 mm')
      else if (inverter[9] <= 95) setDiametroEletroduto('85 mm')
    }
  }

  const enviar = async () => {
    if (total === 2){
    try{
      const result = await Share.share({
        message:
        'Quantidade de cabos = ' + total + '\n'+
        '1º Cabo: ' + espesura1 + 'mm²' + '\n' +
        '2º Cabo: ' + espesura2 + 'mm²' + '\n' +
        'Tamanho nominal do eletroduto = ' + diametroEletroduto
      });
    } catch (error){
      alert(error.message)
    }
  }else if (total === 3){
    try{
      const result = await Share.share({
        message:
        'Quantidade de cabos = ' + total + '\n'+
        '1º Cabo: ' + espesura1 + 'mm²' + '\n' +
        '2º Cabo: ' + espesura2 + 'mm²' + '\n' +
        '3º Cabo: ' + espesura3 + 'mm²' + '\n' +
        'Tamanho nominal do eletroduto = ' + diametroEletroduto
      });
    } catch (error){
      alert(error.message)
    }
  }else if (total === 4){
    try{
      const result = await Share.share({
        message:
        'Quantidade de cabos = ' + total + '\n'+
        '1º Cabo: ' + espesura1 + 'mm²' + '\n' +
        '2º Cabo: ' + espesura2 + 'mm²' + '\n' +
        '3º Cabo: ' + espesura3 + 'mm²' + '\n' +
        '4º Cabo: ' + espesura4 + 'mm²' + '\n' +
        'Tamanho nominal do eletroduto = ' + diametroEletroduto
      });
    } catch (error){
      alert(error.message)
    }
  }else if (total === 5){
    try{
      const result = await Share.share({
        message:
        'Quantidade de cabos = ' + total + '\n'+
        '1º Cabo: ' + espesura1 + 'mm²' + '\n' +
        '2º Cabo: ' + espesura2 + 'mm²' + '\n' +
        '3º Cabo: ' + espesura3 + 'mm²' + '\n' +
        '4º Cabo: ' + espesura4 + 'mm²' + '\n' +
        '5º Cabo: ' + espesura5 + 'mm²' + '\n' +
        'Tamanho nominal do eletroduto = ' + diametroEletroduto
      });
    } catch (error){
      alert(error.message)
    }
  }else if (total === 6){
    try{
      const result = await Share.share({
        message:
        'Quantidade de cabos = ' + total + '\n'+
        '1º Cabo: ' + espesura1 + 'mm²' + '\n' +
        '2º Cabo: ' + espesura2 + 'mm²' + '\n' +
        '3º Cabo: ' + espesura3 + 'mm²' + '\n' +
        '4º Cabo: ' + espesura4 + 'mm²' + '\n' +
        '5º Cabo: ' + espesura5 + 'mm²' + '\n' +
        '6º Cabo: ' + espesura6 + 'mm²' + '\n' +
        'Tamanho nominal do eletroduto = ' + diametroEletroduto
      });
    } catch (error){
      alert(error.message)
    }
  }else if (total === 7){
    try{
      const result = await Share.share({
        message:
        'Quantidade de cabos = ' + total + '\n'+
        '1º Cabo: ' + espesura1 + 'mm²' + '\n' +
        '2º Cabo: ' + espesura2 + 'mm²' + '\n' +
        '3º Cabo: ' + espesura3 + 'mm²' + '\n' +
        '4º Cabo: ' + espesura4 + 'mm²' + '\n' +
        '5º Cabo: ' + espesura5 + 'mm²' + '\n' +
        '6º Cabo: ' + espesura6 + 'mm²' + '\n' +
        '7º Cabo: ' + espesura7 + 'mm²' + '\n' +
        'Tamanho nominal do eletroduto = ' + diametroEletroduto
      });
    } catch (error){
      alert(error.message)
    }
  }else if (total === 8){
    try{
      const result = await Share.share({
        message:
        'Quantidade de cabos = ' + total + '\n'+
        '1º Cabo: ' + espesura1 + 'mm²' + '\n' +
        '2º Cabo: ' + espesura2 + 'mm²' + '\n' +
        '3º Cabo: ' + espesura3 + 'mm²' + '\n' +
        '4º Cabo: ' + espesura4 + 'mm²' + '\n' +
        '5º Cabo: ' + espesura5 + 'mm²' + '\n' +
        '6º Cabo: ' + espesura6 + 'mm²' + '\n' +
        '7º Cabo: ' + espesura7 + 'mm²' + '\n' +
        '8º Cabo: ' + espesura8 + 'mm²' + '\n' +
        'Tamanho nominal do eletroduto = ' + diametroEletroduto
      });
    } catch (error){
      alert(error.message)
    }
  }else if (total === 9){
    try{
      const result = await Share.share({
        message:
        'Quantidade de cabos = ' + total + '\n'+
        '1º Cabo: ' + espesura1 + 'mm²' + '\n' +
        '2º Cabo: ' + espesura2 + 'mm²' + '\n' +
        '3º Cabo: ' + espesura3 + 'mm²' + '\n' +
        '4º Cabo: ' + espesura4 + 'mm²' + '\n' +
        '5º Cabo: ' + espesura5 + 'mm²' + '\n' +
        '6º Cabo: ' + espesura6 + 'mm²' + '\n' +
        '7º Cabo: ' + espesura7 + 'mm²' + '\n' +
        '8º Cabo: ' + espesura8 + 'mm²' + '\n' +
        '9º Cabo: ' + espesura9 + 'mm²' + '\n' +
        'Tamanho nominal do eletroduto = ' + diametroEletroduto
      });
    } catch (error){
      alert(error.message)
    }
  }else if (total === 10){
    try{
      const result = await Share.share({
        message:
        'Quantidade de cabos = ' + total + '\n'+
        '1º Cabo: ' + espesura1 + 'mm²' + '\n' +
        '2º Cabo: ' + espesura2 + 'mm²' + '\n' +
        '3º Cabo: ' + espesura3 + 'mm²' + '\n' +
        '4º Cabo: ' + espesura4 + 'mm²' + '\n' +
        '5º Cabo: ' + espesura5 + 'mm²' + '\n' +
        '6º Cabo: ' + espesura6 + 'mm²' + '\n' +
        '7º Cabo: ' + espesura7 + 'mm²' + '\n' +
        '8º Cabo: ' + espesura8 + 'mm²' + '\n' +
        '9º Cabo: ' + espesura9 + 'mm²' + '\n' +
        '10º Cabo: ' + espesura10 + 'mm²' + '\n' +
        'Tamanho nominal do eletroduto = ' + diametroEletroduto
      });
    } catch (error){
      alert(error.message)
    }
  }
  };

  return (
    <View style={styles.container}>

      <View style={styles.alinhamento2}>
        <View style={{flexDirection: 'row' , alignItems: 'center'}}>
          <Text style={styles.title}>Quantidade{'\n'}  de Cabos</Text>
          <Text> = </Text>
        </View>
        <View style={styles.linha}>
          <Picker style={{height: 50, width: 100}} selectedValue={total} onValueChange={(itemValue) => quantidadeCalculo(itemValue)}>
            {caboQuantidade.map(item => {return <Picker.Item label={item + ''} value={item} key="{item}" />})}
          </Picker>
        </View>
      </View>

      <View style={styles.cabosSelect}>
        <View>

          <View style={styles.alinhamento}>
            <Text style={styles.title}>1° Cabo:</Text>
            <View style={styles.linha}>
              <Picker style={styles.picker2} selectedValue={espesura1} onValueChange={(itemValue) => setEspesura1(itemValue)}>
                {caboDiametro.map(cr => {return <Picker.Item label={cr + " mm²"} value={cr} key='1' />})}
              </Picker>
            </View>
          </View>

          <View style={styles.alinhamento}>
            <Text style={styles.title}>2° Cabo:</Text>
            <View style={styles.linha}>
              <Picker style={styles.picker2} selectedValue={espesura2} onValueChange={(itemValue) => setEspesura2(itemValue)}>
                {caboDiametro.map(cr => {return <Picker.Item label={cr + " mm²"} value={cr} key='2' />})}
              </Picker>
            </View>
          </View>

          <View style={styles.alinhamento}>
            <Text style={styles.title}>3° Cabo:</Text>
            <View style={styles.linha}>
              <Picker style={styles.picker2} selectedValue={espesura3} onValueChange={(itemValue) => setEspesura3(itemValue)} enabled={validar3}>
                {caboDiametro.map(cr => {return <Picker.Item label={cr + " mm²"} value={cr} key='3' />})}
              </Picker>
            </View>
          </View>

          <View style={styles.alinhamento}>
            <Text style={styles.title}>4° Cabo:</Text>
            <View style={styles.linha}>
              <Picker style={styles.picker2} selectedValue={espesura4} onValueChange={(itemValue) => setEspesura4(itemValue)} enabled={validar4}>
                {caboDiametro.map(cr => {return <Picker.Item label={cr + " mm²"} value={cr} key='4' />})}
              </Picker>
            </View>
          </View>
          
          <View style={styles.alinhamento}>
            <Text style={styles.title}>5° Cabo:</Text>
            <View style={styles.linha}>
              <Picker style={styles.picker2} selectedValue={espesura5} onValueChange={(itemValue) => setEspesura5(itemValue)} enabled={validar5}>
                {caboDiametro.map(cr => {return <Picker.Item label={cr + " mm²"} value={cr} key='5' />})}
              </Picker>
            </View>
          </View>

        </View>
        <View>

          <View style={styles.alinhamento}>
            <Text style={styles.title}>6° Cabo:</Text>
            <View style={styles.linha}>
              <Picker style={styles.picker2} selectedValue={espesura6} onValueChange={(itemValue) => setEspesura6(itemValue)} enabled={validar6}>
                {caboDiametro.map(cr => {return <Picker.Item label={cr + " mm²"} value={cr} key='6' />})}
              </Picker>
            </View>
          </View>
          
          <View style={styles.alinhamento}>
            <Text style={styles.title}>7° Cabo:</Text>
            <View style={styles.linha}>
              <Picker style={styles.picker2} selectedValue={espesura7} onValueChange={(itemValue) => setEspesura7(itemValue)} enabled={validar7}>
                {caboDiametro.map(cr => {return <Picker.Item label={cr + " mm²"} value={cr} key='7' />})}
              </Picker>
            </View>
          </View>

          <View style={styles.alinhamento}>
            <Text style={styles.title}>8° Cabo:</Text>
            <View style={styles.linha}>
              <Picker style={styles.picker2} selectedValue={espesura8} onValueChange={(itemValue) => setEspesura8(itemValue)} enabled={validar8}>
                {caboDiametro.map(cr => {return <Picker.Item label={cr + " mm²"} value={cr} key='8' />})}
              </Picker>
            </View>
          </View>

          <View style={styles.alinhamento}>
            <Text style={styles.title}>9° Cabo:</Text>
            <View style={styles.linha}>
              <Picker style={styles.picker2} selectedValue={espesura9} onValueChange={(itemValue) => setEspesura9(itemValue)} enabled={validar9}>
                {caboDiametro.map(cr => {return <Picker.Item label={cr + " mm²"} value={cr} key='9' />})}
              </Picker>
            </View>
          </View>

          <View style={styles.alinhamento}>
            <Text style={styles.title}>10° Cabo:</Text>
            <View style={styles.linha}>
              <Picker style={styles.picker2} selectedValue={espesura10} onValueChange={(itemValue) => setEspesura10(itemValue)} enabled={validar10}>
                {caboDiametro.map(cr => {return <Picker.Item label={cr + " mm²"} value={cr} key='10' />})}
              </Picker>
            </View>
          </View>

        </View>
      </View>
      

      <View style={styles.botao}>
        <BotaoComodo title="Calcular" onPress={Calcular} />
        <Compartilhar antIconName='sharealt' onPress={enviar} />
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>Tamanho nominal do eletroduto = {diametroEletroduto}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  alinhamento:{
    flexDirection: 'row', 
    justifyContent:'flex-start', 
    alignItems: 'center',
    marginBottom: 8,
  },
  alinhamento2:{
    flexDirection: 'row', 
    justifyContent:'center', 
    alignItems: 'center',
    marginBottom: 8,
  },
  linha:{
    borderBottomWidth: 2, 
    borderColor: Estilos.cores.primarioClaro,
    width: 80
  },
  picker1:{
    color: Estilos.cores.detalheEscuro, 
    width: 95,
  },
  picker2: {
    color: Estilos.cores.detalheEscuro, 
    width: 120,
  },
  title:{
    fontSize: 16,
    color: Estilos.cores.detalheEscuro,
  },
  cabosSelect:{
    flexDirection: 'row', 
    justifyContent:'space-around', 
    marginBottom: 20
  },
  botao:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  resposta:{

  }
});