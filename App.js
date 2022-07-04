import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ComodoProvider } from './src/context/ComodoProvider'
import { Casa } from './src/paginas/Casa';
import { Cabos } from './src/paginas/Cabos';
import { Eletroduto } from './src/paginas/Eletroduto';
import { Estilos } from './src/estilo/Estilos';
import { Entypo } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ComodoProvider>
        <Tab.Navigator 
        screenOptions={{
          tabBarActiveTintColor: Estilos.cores.primarioClaro,
          tabBarInactiveTintColor: Estilos.cores.detalheEscuro,
        }}>

          <Tab.Screen 
          name='Cômodos' 
          component={Casa}
          options={{
            tabBarIcon: ({size, color}) => (
              <Entypo name='home' size={size} color={color}/>
            )
          }}
          />

          <Tab.Screen 
          name='Cabo e Disjuntor' 
          component={Cabos}
          options={{
            tabBarIcon: ({size, color}) => (
              <Entypo name='flow-branch' size={size} color={color}/>
            )
          }}
          />
          <Tab.Screen 
          name='Eletroduto' 
          component={Eletroduto}
          options={{
            tabBarIcon: ({size, color}) => (
              <Entypo name='vinyl' size={size} color={color}/>
            )
          }}
          />
        </Tab.Navigator>
      </ComodoProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});


/* 
MaterialCommunityIcons - home-assistant

AntDesign - fork

Entypo - creative-commons-remix

Entypo - creative-commons-sharealike

Entypo - flash

Entypo - flow-branch, flow-cascade, flow-line, flow-parallel, flow-tree

Entypo - hair-cross

Entypo - light-down, light-up

Entypo - network

Entypo - shareable

Entypo - vinyl
*/