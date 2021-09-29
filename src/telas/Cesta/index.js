import React from "react";
import { StyleSheet, View } from "react-native";

/* Componentes criados */
import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";




const Cesta = ()=>{
    return<>
        <Topo/>
        <View style={estilos.cesta}>
        <Detalhes/>
        </View>

        
        
    </>
}

const estilos = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
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