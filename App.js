import React from 'react';
import { StatusBar, SafeAreaView, View} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

/*Componentes Criados */
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta'

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
  if(fonteCarregada == true){
    return (
      <SafeAreaView>
        <StatusBar/>
        <Cesta {...mock}/>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }else{
    return <View/>
  }
  
}