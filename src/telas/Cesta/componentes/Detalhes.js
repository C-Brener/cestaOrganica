import React from "react";
import { StyleSheet, View, Image, Alert, TouchableOpacity} from "react-native";

/*Componentes Criados */
import Texto from "../../../componentes/texto";
import Botao from "../../../componentes/Botao";

const Detalhes = ({nome, logoFazenda, nomeFazenda, descricao, preco, botao})=>{
    return<>
                <Texto style={estilos.nome}>{nome}</Texto>
                <View style={estilos.fazenda}>
                    <Image source={logoFazenda} style={estilos.imageName}/>
                    <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
                </View>
                <Texto style={estilos.descricao}>{descricao}</Texto>
                <Texto style={estilos.preco}>{preco}</Texto>
                <Botao>
                    <Texto style={estilos.textoBotao}>{botao}</Texto>
                </Botao>
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
    },
    textoBotao:{
        color: "white",
        fontSize:16,
        lineHeight:26,
        fontWeight: "bold",
    },
})

export default Detalhes;

// O botão é um tanto limitado, não aceitado estilos externos e afins, contudo podemos substituir o button por TouchableOpacity 