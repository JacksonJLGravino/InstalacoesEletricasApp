import React, { useState } from 'react';
import { Alert, Modal, Share, StyleSheet, Text,  View, ScrollView } from 'react-native';
import { BotaoCircular } from '../componentes/BotaoCircular';
import { BotaoComodo } from '../componentes/BotaoComodo';
import { Cabecalho } from '../componentes/Cabecalho';
import { LongInput } from '../componentes/LongInput';
import { Parametros } from '../componentes/Parametros';
import { TextArea } from '../componentes/TextArea';
import { Estilos } from '../estilo/Estilos';

export function ModalUnicaCozinha({visible, onClose, onSubmit}){
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
  const [potenciaMin, setPotenciaMin] = useState(100)
  const [somaTug, setSomaTug] = useState(0)
  const [tug2, setTug2] = useState(0)
  const [potenciaMin2, setPotenciaMin2] = useState(600)

  const l = parseFloat(largura);
  const c = parseFloat(comprimento);
  const area = c*l;
  const perimetro = c+c+l+l;

  const closeModal = () => {
    setDetalhes('')
    setLargura('')
    setComprimento('')
    setIluminacao(0)
    setIluminacaoMin(0)
    setPotenciaTue('')
    setDescricaoTue('')
    setTug(0)
    setTug2(0)
    setSomaTug(0)
    setTue([])
    onClose()
  }

  const handleSubmit = () => {
    let espesifico = tue.map(tue => 'Aparelho: ' + tue.descricaoTue + ' Potência = ' + tue.potenciaTue + 'w');
    let potenciaTugTotal = (potenciaMin * tug) + (potenciaMin2 * tug2);
    onSubmit(detalhes, largura, comprimento, iluminacao, potenciaMin, tug, tug2, potenciaMin2, somaTug, espesifico, potenciaTugTotal)
    setDetalhes('')
    setLargura('')
    setComprimento('')
    setIluminacao(0)
    setIluminacaoMin(0)
    setPotenciaTue('')
    setDescricaoTue('')
    setTug(0)
    setTug2(0)
    setSomaTug(0)
    setTue([])
    onClose()
  }

  const handleShare = async () => {
    let espesifico = tue.map(tue => '\n' + 'Aparelho: ' + tue.descricaoTue + ' Potência = ' + tue.potenciaTue + 'w')
    let potenciaTugTotal = (potenciaMin * tug) + (potenciaMin2 * tug2);
    try{
      const result = await Share.share({
        message:
        'Cozinha'+ '\n'+
        detalhes + '\n' +
        'Dimensões = ' + largura + 'm x ' + comprimento + 'm' +'\n'+
        'Iluminção = ' + iluminacao + 'VA' + '\n' +
        'Tomadas de uso geral = ' + tug + ' , ' + potenciaMin + 'VA' + '\n' +
        'Tomadas de uso geral = ' + tug2 + ' , ' + potenciaMin2 + 'VA' + '\n' +
        'Tomadas de uso geral Total = ' + somaTug + ' , ' + potenciaTugTotal + 'VA' +'\n'+
        'Tomada de uso espesífico (TUE):' + 
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
      let tugperime = Math.round((perimetro/3.5)+0.49);

      if(area >= 6){
        areaIluminacao = areaIluminacao - 6;
        while (areaIluminacao >= 4) {
          areaIluminacao = areaIluminacao - 4;
          iluminacaoMinima = iluminacaoMinima + 60 ;
        }
      }
      setIluminacao(iluminacaoMinima)
      setIluminacaoMin(iluminacaoMinima)
      if (tugperime <= 3){
        setTug2(tugperime)
        setTug(0)
        setSomaTug(tugperime)
      } else if(tugperime > 6) {
        setSomaTug(tugperime)
        tugperime = tugperime - 2;
        setTug2(2)
        setTug(tugperime)
      }else{
        setSomaTug(tugperime)
        tugperime = tugperime -3;
        setTug2(3)
        setTug(tugperime)
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
    let somarTug = parseFloat(tug) + parseFloat(tug2)
    if(somarTug <= 6) {
      if(tug2 <= 2){
        setTug(0)
        setSomaTug(tug2)
      }else if(tug2 === 3){
        setSomaTug(somarTug)
        somarTug = somarTug - 3;
        setTug(somarTug)
      }
    }else if(somarTug > 6) {
      setSomaTug(somarTug)
      somarTug = somarTug - 2;
      setTug2(2);
      setTug(somarTug);
    }
  }

  const handleOnChangeTug2 = () => {
    let somarTug = parseFloat(tug) + parseFloat(tug2)
    if(somarTug <= 3 && somarTug > 0) {
      setTug2(somarTug);
      setSomaTug(somarTug)
    }else if(somarTug > 6 && tug >= 5) {
      setTug2(2);
      setSomaTug(2 + parseFloat(tug))
    }else{
      setTug2(3);
      setSomaTug(3 + parseFloat(tug))
    }
  }

  const handleOnChangeSomaTug = () => {
    if(somaTug <= 3 && somaTug > 0) {
      setTug2(somaTug);
      setTug(0);
    }else if(somaTug > 6) {
      setTug2(2);
      setTug(somaTug - 2);
    }else{
      setTug2(3);
      setTug(somaTug - 3);
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

      <Cabecalho title="Cozinha" onPress={closeModal} onPress2={handleSubmit} onPress3={handleShare}/>

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
        <View style={{flexDirection: 'row'}}>
          <View>
            <Parametros text='Potência =' unidade='VA' value={potenciaMin + ''} onChangeText={setPotenciaMin} onEndEditing={() => handleOnChangePotenciaMin()} />
            <Parametros text='Quantidade =' value={tug + ''} onChangeText={setTug} onEndEditing={() => handleOnChangeTug()} />
          </View>
          <View>
            <Parametros text='Potência =' unidade='VA' value={potenciaMin2 + ''} onChangeText={setPotenciaMin2} onEndEditing={() => handleOnChangePotenciaMin()} />
            <Parametros text='Quantidade =' value={tug2 + ''} onChangeText={setTug2} onEndEditing={() => handleOnChangeTug2()} />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Parametros text='Potência Total =' unidade='VA' value={(potenciaMin * tug) + (potenciaMin2 * tug2) + ''}/>
          <Parametros text='Quantidade Total =' value={somaTug + ''} onChangeText={setSomaTug} onEndEditing={() => handleOnChangeSomaTug()} />
        </View>
        <Text style={styles.textinho}>
          "Em cozinhas, copas, copas-cozinhas, áreas de serviço, cozinha-área de serviço, lavanderias e locais análogos, deve ser previsto no mínimo um ponto de tomada para cada 3,5m, ou fração, de perímetro, sendo que acima da bancada da pia devem ser previstas no mínimo duas tomadas de corrente, no mesmo ponto ou em pontos distintos." {'\n'}
          "Em banheiros, cozinhas, copas, copas-cozinhas, áreas de serviço, lavanderias e locais análogos, no mínimo 600 VA por ponto de tomada, até três pontos, e 100 VA por ponto para os excedentes, considerando-se cada um desses ambientes separadamente. Quando o total de tomadas no conjunto desses ambientes for superior a seis pontos, admite-se que o critério de atribuição de potências seja de no mínimo 600 VA por ponto de tomada, até dois pontos, e 100 VA por ponto para os excedentes, sempre considerando cada um dos ambientes separadamente"
        </Text>
      </View>

      <View style={styles.cards}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.title}>Tomada de uso espesífico (TUE):</Text>
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
    fontSize: 9, 
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
    height: '50%', 
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
