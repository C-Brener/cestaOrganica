import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Texto from '../../../componentes/texto'

const Itens= ({ titulo, lista })=>{
    return<>

        <Texto style={estilos.titulo}>{ titulo }</Texto>
        {lista.map(({nome, imagem})=>{
            return <View style={estilos.lista} key={nome}>
            <Texto >{nome}</Texto>
            <Image style={estilos.imagem}source={imagem}/>
            </View>
        })}
    
        </>

}
const estilos = StyleSheet.create({
    titulo:{
        color:"#464646",
        fontWeight:"bold",
        marginTop:32,
        textAlign: "center"
    },
    lista:{
        flex:1,
        flexDirection:"row",
    },
    imagem:{
        width:40,
        height:40
    }
})

export default Itens;