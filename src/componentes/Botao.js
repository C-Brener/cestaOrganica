import React from "react";
import { TouchableOpacity, Alert, StyleSheet } from "react-native";


const Botao = ({children})=>{
    return<>
        <TouchableOpacity style={estilos.botao} onPress={() => Alert.alert('Testando Botão')}>
            {children}
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    botao:{
        alignItems: "center",
        justifyContent: "center",
        width:"100%",
        height:40,
        backgroundColor:'#2a9f85',
        borderRadius:5,
        marginTop:16,
    },
})

export default Botao;