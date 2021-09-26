import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return<>
        <Image source={topo} style={estilos.topo}/>
        <Text style={estilos.titulo}>Detalhes da Cesta</Text>   
        
        <View style={estilos.cesta}>
            <Text style={estilos.nome}>Cesta de Verduras</Text>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imageName}/>
                <Text style={estilos.nomeFazenda}>Brener Farm</Text>
            </View>
            <Text style={estilos.descricao}> Uma cesta com produtos selecionados cuidadosamente da fazenda para sua cozinha</Text>
            <Text style={estilos.preco}>R$40.00</Text>
        </View>
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

    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome:{
        color:'#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
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
        marginLeft:12
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

// Criando o primeiro componente
// Para importar uma imagem precisamos transforma-la em um componentte importando-a
// Não é possivel retornar dois elementos dentro de um return
// Fragmentos é um estilo de subcomponentes que consegue agrupar outros componentes dentro de um return 
//O padrão do flexDirection no react natoive é collum, e podemos trocar para row, funciona parecido com o display inline-block
//Por padrão todos os elementos do react-native já são display flex