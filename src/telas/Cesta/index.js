import React from "react";
import { Image, StyleSheet,View } from "react-native";
import Texto from '../../componentes/texto';

import logo from '../../../assets/logo.png'
import Topo from "./componentes/Topo";




const Cesta = ()=>{
    return<>
        <Topo/>
        <View style={estilos.cesta}>
            <Texto style={estilos.nome}>Cesta de Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imageName}/>
                <Texto style={estilos.nomeFazenda}>Brener Farm</Texto>
            </View>
            <Texto style={estilos.descricao}> Uma cesta com produtos selecionados cuidadosamente da fazenda para sua cozinha</Texto>
            <Texto style={estilos.preco}>R$40.00</Texto>
        </View>
    </>
}

const estilos = StyleSheet.create({

    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome:{
        fontWeight:"bold",
        color:'#464646',
        fontSize: 26,
        lineHeight: 42
    },
    fazenda:{
        flexDirection:"row",
        paddingVertical:12
    },
    imageName:{
        width: 32,
        height: 32
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight:26,
        marginLeft:12,
    },
    descricao:{
        color: "#A3a3a3",
        fontSize: 16,
        lineHeight: 26
    },
    preco:{
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize:26,
        lineHeight:42,
        marginTop:8
    }
})

export default Cesta;

// Criando o primeiro componente
// Para importar uma imagem precisamos transforma-la em um componentte importando-a
// Não é possivel retornar dois elementos dentro de um return
// Fragmentos é um estilo de subcomponentes que consegue agrupar outros componentes dentro de um return 
//O padrão do flexDirection no react natoive é collum, e podemos trocar para row, funciona parecido com o display inline-block
//Por padrão todos os elementos do react-native já são display flex
// expo install expo-font @expo-google-fonts/montserrat - instalar fonte externa
// Comand + d seleciona aquilo onde o cursor está e procura nomes parecidos para caso tenhamos o desejo de substituir