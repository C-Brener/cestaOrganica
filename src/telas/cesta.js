import React from "react";
import { Image, StyleSheet, Dimensions, Text } from "react-native";
import topo from '../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return<>
        <Image source={topo} style={estilos.topo}/>
        <Text style={estilos.titulo}>Detalhes da Cesta</Text>   
    </>
}

const estilos = StyleSheet.create({
    topo:{
        width: '100%',
        height: 578 / 768 * width,

    },
    titulo:{
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 20,
        lineHeight:26,
        color: "white",
        fontWeight: "bold",
        padding: 16

    }
})

// Criando o primeiro componente
// Para importar uma imagem precisamos transforma-la em um componentte importando-a
// Não é possivel retornar dois elementos dentro de um return
// Fragmentos é um estilo de subcomponentes que consegue agrupar outros componentes dentro de um return 