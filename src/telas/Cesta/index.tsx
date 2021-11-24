import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Texto from "../../componentes/texto";
/* Componentes criados */
import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import item from "./componentes/item";




const Cesta = ({topo, detalhes, itens})=>{
    return<>
        <FlatList style={estilos.lista} data={itens.lista} renderItem={item} keyExtractor={({nome}) => nome} ListHeaderComponent={()=>{
            return <>
                <Topo {...topo}/>
                <View style={estilos.cesta}>
                    <Detalhes {...detalhes} />
                    <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                </View>
            </>
        }}/>      

    </>

}

const estilos = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulo:{
        color:"#464646",
        fontWeight:"bold",
        marginTop:32,
        marginBottom: 8,
        textAlign: "center"
    },
    lista:{
        paddingHorizontal:16
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