import React, { useState } from 'react';
import { Alert, Modal, Share, StyleSheet, Text,  View, ScrollView } from 'react-native';
import { BotaoCircular } from '../componentes/BotaoCircular';
import { BotaoComodo } from '../componentes/BotaoComodo';
import { Cabecalho } from '../componentes/Cabecalho';
import { LongInput } from '../componentes/LongInput';
import { Parametros } from '../componentes/Parametros';
import { TextArea } from '../componentes/TextArea';
import { Estilos } from '../estilo/Estilos';

export function ModalUnicaVaranda({visible, onClose, onSubmit}){
  const [detalhes, setDetalhes] = useState('')
  const [largura, setLargura] = useState('')
  const [comprimento, setComprimento] = useState('')
  const [iluminacao, setIluminacao] = useState(0);
  const [iluminacaoMin, setIluminacaoMin] = useState(0);
  const [tue, setTue] = useState([]);
  const [tueModal, setTueModal] = useState(false);
  const [potenciaTue, setPotenciaTue] = useState('')
  const [descricaoTue, setDescricaoTue] = useState('')
  const [tug, setTug] = useState(0)
  const [tugMin, setTugMin] = useState(0)
  const [potenciaMin, setPotenciaMin] = useState(100)

  const l = parseFloat(largura);
  const c = parseFloat(comprimento);
  const area = c*l;

  const closeModal = () => {
    setLargura('')
    setComprimento('')
    setDetalhes('')
    setIluminacao(0)
    setIluminacaoMin(0)
    setPotenciaTue('')
    setDescricaoTue('')
    setTug(0)
    setTue([])
    onClose()
  }

  const handleSubmit = () => {
    let espesifico = tue.map(tue => 'Aparelho: ' + tue.descricaoTue + ' Potência = ' + tue.potenciaTue + 'w');
    let potenciaTugTotal = potenciaMin * tug;
    onSubmit(detalhes ,largura, comprimento, iluminacao, potenciaMin, tug, espesifico, potenciaTugTotal)
    setLargura('')
    setComprimento('')
    setDetalhes('')
    setIluminacao(0)
    setIluminacaoMin(0)
    setPotenciaTue('')
    setDescricaoTue('')
    setTug(0)
    setTue([])
    onClose()
  }

  const handleShare = async () => {
    let espesifico = tue.map(tue => '\n' + 'Aparelho: ' + tue.descricaoTue + ' Potência = ' + tue.potenciaTue + 'w')
    let potenciaTugTotal = potenciaMin * tug;
    try{
      const result = await Share.share({
        message:
        'Varanda'+ '\n'+
        detalhes + '\n' +
        'Dimensões = ' + largura + 'm x ' + comprimento + 'm' +'\n'+
        'Iluminação = ' + iluminacao + 'VA' + '\n' +
        'Tomadas de uso geral = ' + tug + ' , ' + potenciaMin + 'VA' + '\n' +
        'Potência total (TUG) = ' + potenciaTugTotal + 'VA' + '\n'+
        'Tomada de uso específico (TUE):' + 
        espesifico 
        
      });
    } catch (error){
      alert(error.message)
    }
  };

  const Calcular = () => {
    if(largura > 0 && comprimento > 0){
      let iluminacaoMinima = 100;
      let areaIluminacao = area;

      if(area >= 6){
        areaIluminacao = areaIluminacao - 6;
        while (areaIluminacao >= 4) {
          areaIluminacao = areaIluminacao - 4;
          iluminacaoMinima = iluminacaoMinima + 60 ;
        }
      }
      setIluminacao(iluminacaoMinima)
      setIluminacaoMin(iluminacaoMinima)
      if (area < 2 || c < 0.8 || l < 0.8){
        setTug(0);
        setTugMin(0)
       }else{
        setTug(1);
        setTugMin(1)
       }
    }
  }

  const handleOnChangeIluminacao = () => {
    let novoValor = iluminacao;
    let valorAntigo = iluminacaoMin;
    if (valorAntigo > novoValor){
      setIluminacao(iluminacaoMin)
    } else{
      setIluminacao(novoValor)
    }
  }

  const handleOnChangePotenciaMin = () => {
    if (potenciaMin < 100 ){
      setPotenciaMin(100)
    }
  }

  const handleOnChangeTug = () => {
    let novoValor = parseFloat(tug)
    let valorAntido = parseFloat(tugMin)
    if (valorAntido > novoValor ){
      setTug(tugMin)
    }
    else{
      setTug(novoValor)
    }
  }

  function addTue(){
    setTueModal(!tueModal)
    let id = 0;
    if(tue.length > 0){
      id = tue[tue.length-1].id+1;
    }
    let tomadaEspesifica = {id, potenciaTue, descricaoTue}
    setTue([...tue,tomadaEspesifica])
  }

  function deletarTue(id) {
    let newTue = tue.filter(function(val){
      return val.id != id;
    });
    setTue(newTue);
  }

  return(
    <Modal visible={visible} animationType='slide'>
    <Modal transparent={true} visible={tueModal} onRequestClose={() => {Alert.alert("Modal has been closed")}}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <LongInput text='Aparelho =' onChangeText={setDescricaoTue}/>
          <LongInput text='Potência =' unidade='w' onChangeText={setPotenciaTue} keyboardType='numeric'/>
          <BotaoComodo title="Adicionar" onPress={() => addTue()}/>
        </View>
      </View>
    </Modal>

      <Cabecalho title="Varanda" onPress={closeModal} onPress2={handleSubmit} onPress3={handleShare}/>

      <View style={styles.container}>

        <View>
          <TextArea onChangeText={setDetalhes}/>
        </View>

      <View style={styles.cards}>
        <Text style={styles.title}>Dimensões:</Text>
        <View style={styles.parametroTotal}>
          <Parametros text='Largura =' onChangeText={setLargura} value={largura} onEndEditing={Calcular} unidade='m'/>
          <Parametros text='Comprimento =' onChangeText={setComprimento} value={comprimento} onEndEditing={Calcular} unidade='m'/>
        </View>
      </View>

      <View style={styles.cards}>
        <Text style={styles.title}>Iluminação:</Text>
        <Parametros text='Potência =' unidade='VA' value={iluminacao + ''} onChangeText={setIluminacao} onEndEditing={() => handleOnChangeIluminacao()}/>
        <Text style={styles.textinho}>
          "Em cômodos ou dependências com área igual ou inferior a 6m², deve ser prevista uma carga mínima de 100VA." {'\n'}
          "Em cômodo ou dependências com área superior a 6m², deve ser prevista uma carga mínima de 100VA para os primeiros 6m², acrescida de 60VA para cada aumento de 4m² inteiros."
        </Text>
      </View>

      <View style={styles.cards2}>
        <Text style={styles.title}>Tomada de uso geral (TUG):</Text>
        <Parametros text='Potência =' unidade='VA' value={potenciaMin + ''} onChangeText={setPotenciaMin} onEndEditing={() => handleOnChangePotenciaMin()} />
        <Parametros text='Quantidade =' value={tug + ''} onChangeText={setTug} onEndEditing={() => handleOnChangeTug()} />
        <Parametros text='Potência Total =' unidade='VA' value={potenciaMin * tug + ''}/>
        <Text style={styles.textinho}>
          "Em varandas, deve ser previsto pelo menos um ponto de tomada." {'\n'}
          "Admite-se que o ponto de tomada não seja instalado na própria varanda, mas próximo ao seu acesso, quando a varanda, por razões construtivas, não comportar o ponto de tomada, quando sua área for inferior a 2m² ou, ainda, quando sua profundidade for inferior a 0,80m.
        </Text>
      </View>

      <View style={styles.cards}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.title}>Tomada de uso específico (TUE):</Text>
          <BotaoCircular antIconName='pluscircle' onPress={() => setTueModal(true)} />
        </View>
        
        <View style={styles.tueView}>
        <ScrollView>
        {tue.map(function(val){
              return(
                <View key={val.id}>
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                    <Text style={{color: Estilos.cores.detalheEscuro}}>Aparelho: {val.descricaoTue}</Text>
                    <Text style={{color: Estilos.cores.detalheEscuro}}>Potência = {val.potenciaTue}w</Text>
                    </View>
                    <BotaoCircular antIconName='delete' onPress={() => deletarTue(val.id)} />
                  </View>
                  <View style={styles.linha} />
                </View>
              )
            })
            }
        </ScrollView>
        </View>

      </View>
      

      </View>
    </Modal>
  )
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal: 15
  },
  title:{
    fontSize: 17,
    color: Estilos.cores.detalheEscuro,
  },
  parametroTotal: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cards:{
    marginBottom: 12,
  },
  cards2:{
    marginBottom: 5,
  },
  textinho:{
    fontSize: 9.5, 
    color: Estilos.cores.primarioClaro, 
    textAlign: 'justify',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
  },
  tueView:{
    height: '55%', 
    padding: 12,
    borderRadius: 12,
    borderColor: Estilos.cores.primarioClaro,
    borderWidth: 2,
  },
  linha:{
    borderWidth: 2,
    width: '90%',
    borderRadius: 12,
    borderColor: Estilos.cores.primarioClaro,
    opacity: 0.7,
    marginBottom: 12,
    alignSelf: 'center',
  }
})