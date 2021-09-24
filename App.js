import React from 'react';
import { StatusBar, SafeAreaView} from 'react-native';
import Cesta from './src/telas/cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}