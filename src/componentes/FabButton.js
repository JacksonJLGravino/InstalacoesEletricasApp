import React, {Component} from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text, Animated} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import { Estilos } from "../estilo/Estilos";

export default class FabButton extends Component {
  animation = new Animated.Value(0)

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1

    Animated.spring(this.animation, {
      toValue,
      friction: 7,
      useNativeDriver: true
    }).start();

    this.open = !this.open;
  }
  render(){

    const salaStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0,1],
            outputRange: [0,-298]
          })
        }
      ]
    }

    const banheiroStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0,1],
            outputRange: [0,-255]
          })
        }
      ]
    }

    const cozinhaStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0,1],
            outputRange: [0,-212]
          })
        }
      ]
    }

    const quartoStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0,1],
            outputRange: [0,-169]
          })
        }
      ]
    }

    const copaStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0,1],
            outputRange: [0,-126]
          })
        }
      ]
    }

    const varandaStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0,1],
            outputRange: [0,-83]
          })
        }
      ]
    }

    const lavanderiaStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0,1],
            outputRange: [0,-40]
          })
        }
      ]
    }


    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0,1],
            outputRange: ['0deg', '45deg']
          })
        }
      ]
    }
    return(
      <View style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback onPress={this.props.onPressSala}>
          <Animated.View style={[styles.button, styles.submenu, salaStyle]}>
            <Text style={styles.texto}>Sala</Text>
          </Animated.View>        
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.props.onPressBanheiro}>
          <Animated.View style={[styles.button, styles.submenu, banheiroStyle]}>
            <Text style={styles.texto}>Banheiro</Text>
          </Animated.View>        
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.props.onPressCozinha}>
          <Animated.View style={[styles.button, styles.submenu, cozinhaStyle]}>
            <Text style={styles.texto}>Cozinha</Text>
          </Animated.View>        
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.props.onPressQuarto}>
          <Animated.View style={[styles.button, styles.submenu, quartoStyle]}>
            <Text style={styles.texto}>Quarto</Text>
          </Animated.View>        
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.props.onPressCopa}>
          <Animated.View style={[styles.button, styles.submenu, copaStyle]}>
            <Text style={styles.texto}>Copa</Text>
          </Animated.View>        
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.props.onPressVaranda}>
          <Animated.View style={[styles.button, styles.submenu, varandaStyle]}>
            <Text style={styles.texto}>Varanda</Text>
          </Animated.View>        
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.props.onPressLavanderia}>
          <Animated.View style={[styles.button, styles.submenu, lavanderiaStyle]}>
            <Text style={styles.texto}>Lavanderia</Text>
          </Animated.View>        
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, styles.menu, rotation]}>
            <AntDesign name='plus' size={24} color='#FFF' />
          </Animated.View>        
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    position: 'absolute',
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Estilos.cores.primarioClaro,
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10,
    }
  },
  menu:{
      backgroundColor: Estilos.cores.primarioClaro
  },
  submenu: {
    width: 120,
    height: 35,
    backgroundColor: Estilos.cores.primarioClaro
  },
  texto: {
    color: 'white',
  }
})