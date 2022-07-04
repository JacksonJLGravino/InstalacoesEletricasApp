import React, { createContext, useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ComodoContext = createContext();

export function ComodoProvider({children}){
  const [comodo, setComodo] = useState([])

  const findComodo = async () => {
    const result = await AsyncStorage.getItem('comodo');
    if(result !== null) setComodo(JSON.parse(result))
  }

  useEffect(() => {
      findComodo()
  },[]);

  return(
    <ComodoContext.Provider value={{comodo, setComodo, findComodo}}>
      {children}
    </ComodoContext.Provider>
  )
}

export const useComodo = () => useContext(ComodoContext)