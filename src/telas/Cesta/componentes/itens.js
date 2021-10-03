import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Texto from '../../../componentes/texto'

const Itens= ({ titulo, lista })=>{
    return<>

        <Texto style={estilos.titulo}>{ titulo }</Texto>
        {lista.map(({nome, imagem})=>{
            return <View style={estilos.lista} key={nome}>
            <Image style={estilos.imagem} source={imagem}/>
            <Texto style={estilos.texto}>{nome}</Texto>
            </View>
        })}
    
        </>

}
const estilos = StyleSheet.create({
    titulo:{
        color:"#464646",
        fontWeight:"bold",
        marginTop:32,
        marginBottom: 8,
        textAlign: "center"
    },
    lista:{
        flex:1,
        flexDirection:"row",
        borderBottomWidth: 1, 
        borderBottomColor:"#ECECEC",
        paddingVertical: 16,
        alignItems:"center"
    },
    imagem:{
        width:46,
        height:46
    },
    texto:{
        fontSize:16,
        lineHeight:26,
        marginLeft:12,
        color:"#464646"

    }
})

export default Itens;