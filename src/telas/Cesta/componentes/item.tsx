import React from "react";
import { Image, View, StyleSheet} from "react-native";
import Texto from '../../../componentes/texto'

interface propsItem{
    item:any
    nome:string;
    imagem:string
}
const Item= ({item: {nome, imagem}}:propsItem)=>{
    return <View style={estilos.lista}>
    <Image style={estilos.imagem} source={imagem}/>
    <Texto style={estilos.texto}>{nome}</Texto>
    </View>
}

const estilos = StyleSheet.create({
    lista:{
        flex:1,
        flexDirection:"row",
        borderBottomWidth: 1, 
        borderBottomColor:"#ECECEC",
        paddingVertical: 16,
        marginHorizontal:16,
        alignItems:"center",
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

export default Item;