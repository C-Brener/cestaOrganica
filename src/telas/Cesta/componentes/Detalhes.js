import React from "react";
import { StyleSheet, View, Image } from "react-native";

/*Componentes Criados */
import Texto from "../../../componentes/texto";
import logo from '../../../../assets/logo.png'

const Detalhes = ()=>{
    return<>
                <Texto style={estilos.nome}>Cesta de Verduras</Texto>
                <View style={estilos.fazenda}>
                    <Image source={logo} style={estilos.imageName}/>
                    <Texto style={estilos.nomeFazenda}>Brener Farm</Texto>
                </View>
                <Texto style={estilos.descricao}> Uma cesta com produtos selecionados cuidadosamente da fazenda para sua cozinha</Texto>
                <Texto style={estilos.preco}>R$40.00</Texto>
        </>
    }

const estilos = StyleSheet.create({
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

export default Detalhes;