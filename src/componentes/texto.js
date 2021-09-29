import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Texto=({children, style})=>{
    let estilo = estilos.texto;
    

    if(style?.fontWeight === 'bold'){
        estilo = estilos.textoBold;
    }

    return <Text style={[style, estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto:{
        fontFamily:"MontserratRegular"
    },
    textoBold:{
        fontFamily:"MontserratBold",
        fontWeight: "normal"
    }
})

export default Texto;

/*
O react-native tem uma função que define algo chamado children, e o que seria isso?, 
basicamente essa função define que tudo o que seja passado dentro de um componente é filho daquele componente, cosequentemente
definimos usando essa função podemos aplicar qualquer coisa de forma recursiva em outros componentes devido ao mesmo estar carregando
o efeito children.
 */