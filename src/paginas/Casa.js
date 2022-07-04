import React, {useState} from "react";
import { View, StyleSheet, Alert, FlatList, Share,Text } from "react-native";
import { ComodoSelect } from "../componentes/ComodoSelect";
import FabButton from "../componentes/FabButton";
import { ModalUnicaSala } from "../modais/ModalUnicaSala";
import { ModalUnicoQuarto } from "../modais/ModalUnicoQuarto";
import { ModalUnicoBanheiro } from "../modais/ModalUnicoBanheiro";
import { ModalUnicaCozinha } from "../modais/ModaUnicaCozinha";
import { ModalUnicaCopa } from "../modais/ModalUnicaCopa";
import { ModalUnicaVaranda } from "../modais/ModalUnicaVaranda";
import { useComodo } from "../context/ComodoProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Comodos from "../componentes/Comodos";
import { ModalUnicaLavanderia } from "../modais/ModalUnicaLavanderia";
import { NotFound } from "../componentes/NotFound";
import { Compartilhar } from "../componentes/Compartilhar";
import { Estilos } from "../estilo/Estilos";


export function Casa() {
  const [filtro, setFiltro] = useState('');
  const [modalCopaUnica, setModalCopaUnica] = useState(false)
  const [modalCozinhaUnica, setModalCozinhaUnica] = useState(false)
  const [modalLavanderiaUnica, setModalLavanderiaUnica] = useState(false)
  const [modalSalaUnica, setModalSalaUnica] = useState(false)
  const [modalVarandaUnica, setModalVarandaUnica] = useState(false)
  const [modalBanheiroUnico, setModalBanheiroUnico] = useState(false)
  const [modalQuartoUnico, setModalQuartoUnico] = useState(false)
  const [resultNotFound, setResultNotFound] = useState(false);

  const {comodo, setComodo, findComodo} = useComodo()

  const handleOnSearchInput = async item => {
    setFiltro(item)
    if (!item.trim()){
      setResultNotFound(false)
      return await findComodo()
    }
    const filtrarComodo = comodo.filter(comodos => {
      if(comodos.title.toLowerCase().includes(item.toLowerCase())){
        return item;
      }
    })
    if(filtrarComodo.length){
      setComodo([...filtrarComodo])
    }else{
      if(comodo.length !== 0){
        setResultNotFound(true);
      }
      
    }
  }

  const handleOnClear = async () => {
    setFiltro('')
    setResultNotFound(false)
    await findComodo()
  }

  const handleOnSubmitCozinha = async (detalhes, largura, comprimento, iluminacao, potenciaMin, tug, tug2, potenciaMin2, somaTug, espesifico, potenciaTugTotal) => {
    const cozinha = {id: Date.now(), detalhes, title: 'Cozinha', largura, comprimento, iluminacao, potenciaMin, tug, tug2, potenciaMin2, somaTug, espesifico, potenciaTugTotal}
    let updateComodos = [...comodo, cozinha]
    setComodo(updateComodos)
    await AsyncStorage.setItem('comodo', JSON.stringify(updateComodos))
  }

  const handleOnSubmitLavanderia = async (detalhes, largura, comprimento, iluminacao, potenciaMin, tug, tug2, potenciaMin2, somaTug, espesifico, potenciaTugTotal) => {
    const lavanderia = {id: Date.now(), detalhes, title: 'Lavanderia', largura, comprimento, iluminacao, potenciaMin, tug, tug2, potenciaMin2, somaTug, espesifico, potenciaTugTotal}
    let updateComodos = [...comodo, lavanderia]
    setComodo(updateComodos)
    await AsyncStorage.setItem('comodo', JSON.stringify(updateComodos))
  }

  const handleOnSubmitCopa = async (detalhes, largura, comprimento, iluminacao, potenciaMin, tug, tug2, potenciaMin2, somaTug, espesifico, potenciaTugTotal) => {
    const copa = {id: Date.now(), detalhes, title: 'Copa', largura, comprimento, iluminacao, potenciaMin, tug, tug2, potenciaMin2, somaTug, espesifico, potenciaTugTotal}
    let updateComodos = [...comodo, copa]
    setComodo(updateComodos)
    await AsyncStorage.setItem('comodo', JSON.stringify(updateComodos))
  }

  const handleOnSubmitBanheiro = async (detalhes, largura, comprimento, iluminacao, potenciaMin, tug, tug2, potenciaMin2, somaTug, espesifico, potenciaTugTotal) => {
    const banheiro = {id: Date.now(), detalhes, title: 'Banheiro', largura, comprimento, iluminacao, potenciaMin, tug, tug2, potenciaMin2, somaTug, espesifico, potenciaTugTotal}
    let updateComodos = [...comodo, banheiro]
    setComodo(updateComodos)
    await AsyncStorage.setItem('comodo', JSON.stringify(updateComodos))
  }

  const handleOnSubmitSala = async (detalhes, largura, comprimento, iluminacao, potenciaMin, tug, espesifico, potenciaTugTotal) => {
    const sala = {id: Date.now(), detalhes, title: 'Sala', largura, comprimento, iluminacao, potenciaMin, tug, tug2: 0, potenciaMin2: 0, somaTug: tug, espesifico, potenciaTugTotal}
    let updateComodos = [...comodo, sala]
    setComodo(updateComodos)
    await AsyncStorage.setItem('comodo', JSON.stringify(updateComodos))
  }

  const handleOnSubmitQuarto = async (detalhes, largura, comprimento, iluminacao, potenciaMin, tug, espesifico, potenciaTugTotal) => {
    const quarto = {id: Date.now(), detalhes, title: 'Quarto', largura, comprimento, iluminacao, potenciaMin, tug, tug2: 0, potenciaMin2: 0, somaTug: tug, espesifico, potenciaTugTotal}
    let updateComodos = [...comodo, quarto]
    setComodo(updateComodos)
    await AsyncStorage.setItem('comodo', JSON.stringify(updateComodos))
  }

  const handleOnSubmitVaranda = async (detalhes, largura, comprimento, iluminacao, potenciaMin, tug, espesifico, potenciaTugTotal) => {
    const varanda = {id: Date.now(), detalhes, title: 'Varanda', largura, comprimento, iluminacao, potenciaMin, tug, tug2: 0, potenciaMin2: 0, somaTug: tug, espesifico, potenciaTugTotal}
    let updateComodos = [...comodo, varanda]
    setComodo(updateComodos)
    await AsyncStorage.setItem('comodo', JSON.stringify(updateComodos))
  }

  const deletar = async item => {
    const result = await AsyncStorage.getItem('comodo')
    let uComodo = []
    if (result !== null) uComodo = JSON.parse(result)

    const newComodo = uComodo.filter(a => a.id !== item.id)
    setComodo(newComodo)
    await AsyncStorage.setItem('comodo', JSON.stringify(newComodo))
  }

  const enviar = async item => {
    let maisEspesifico = item.espesifico.map(espesifico => '\n' + espesifico)
    console.log(maisEspesifico)
    if (item.tug2 != ''){
    try{
      const result = await Share.share({
        message:
        item.title+ '\n'+
        item.detalhes + '\n' +
        'Dimensões = ' + item.largura + 'm x ' + item.comprimento + 'm' +'\n'+
        'Iluminção = ' + item.iluminacao + 'VA' + '\n' +
        'Tomadas de uso geral = ' + item.tug + ' , ' + item.potenciaMin + 'VA' + '\n' +
        'Tomadas de uso geral = ' + item.tug2 + ' , ' + item.potenciaMin2 + 'VA' + '\n' +
        'Potência total (TUG) = ' + item.potenciaTugTotal + 'VA' + '\n'+
        'Tomada de uso espesífico (TUE):' + 
        maisEspesifico
      });
    } catch (error){
      alert(error.message)
    }
  }else{
    try{
      const result = await Share.share({
        message:
        item.title+ '\n'+
        item.detalhes + '\n' +
        'Dimensões = ' + item.largura + 'm x ' + item.comprimento + 'm' +'\n'+
        'Iluminção = ' + item.iluminacao + 'VA' + '\n' +
        'Tomadas de uso geral = ' + item.tug + ' , ' + item.potenciaMin + 'VA' + '\n' +
        'Potência total (TUG) = ' + item.potenciaTugTotal + 'VA' + '\n'+
        'Tomada de uso espesífico (TUE):' + 
        maisEspesifico
      });
    } catch (error){
      alert(error.message)
    }
  }
  };

  return(
    <View style={styles.container}>
      {filtro === ''?
        <ComodoSelect 
          onPressSala={() => handleOnSearchInput('Sala')}
          onPressBanheiro={() => handleOnSearchInput('Banheiro')}
          onPressCozinha={() => handleOnSearchInput('Cozinha')}
          onPressQuarto={() => handleOnSearchInput('Quarto')}
          onPressCopa={() => handleOnSearchInput('Copa')}
          onPressVaranda={() => handleOnSearchInput('Varanda')}
          onPressLavanderia={() => handleOnSearchInput('Lavanderia')}
        />  
      : <View style={{alignItems: 'center'}}>
          <Compartilhar antIconName='close' onPress={handleOnClear}/>
        </View> 
      }

      <ModalUnicaSala visible={modalSalaUnica} onClose={() => setModalSalaUnica(false)} onSubmit={handleOnSubmitSala} />
      <ModalUnicoQuarto visible={modalQuartoUnico} onClose={() => setModalQuartoUnico(false)} onSubmit={handleOnSubmitQuarto}/>
      <ModalUnicoBanheiro visible={modalBanheiroUnico} onClose={() => setModalBanheiroUnico(false)} onSubmit={handleOnSubmitBanheiro}/>
      <ModalUnicaCozinha visible={modalCozinhaUnica} onClose={() => setModalCozinhaUnica(false)} onSubmit={handleOnSubmitCozinha} />
      <ModalUnicaCopa visible={modalCopaUnica} onClose={() => setModalCopaUnica(false)} onSubmit={handleOnSubmitCopa} />
      <ModalUnicaVaranda visible={modalVarandaUnica} onClose={() => setModalVarandaUnica(false)} onSubmit={handleOnSubmitVaranda}/>
      <ModalUnicaLavanderia visible={modalLavanderiaUnica} onClose={() => setModalLavanderiaUnica(false)} onSubmit={handleOnSubmitLavanderia} />

      {resultNotFound ? <NotFound />
      :
      <View style={{paddingBottom: 50,}}>
        <FlatList data={comodo} keyExtractor={item => item.id.toString()} renderItem={({item}) => <Comodos item={item} onPress={() => deletar(item)} onPress2={() => enviar(item)}/>}/>
      </View>
      }

      {!comodo.length ? (
      <View style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}>
          <Text style={styles.emptyHeader}>Sem Cômodos Salvos</Text>
      </View>
      ) : null }
      <FabButton style={{bottom: 80, right: 70}} onPressBanheiro={() => setModalBanheiroUnico(true)} 
                                                 onPressSala={() => setModalSalaUnica(true)} 
                                                 onPressCozinha={() => setModalCozinhaUnica(true)}
                                                 onPressQuarto={() => setModalQuartoUnico(true)}
                                                 onPressCopa={() => setModalCopaUnica(true)}
                                                 onPressVaranda={() => setModalVarandaUnica(true)}
                                                 onPressLavanderia={() => setModalLavanderiaUnica(true)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white'
  },
  emptyHeaderContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
},
emptyHeader: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: Estilos.cores.detalheClaro
},
})