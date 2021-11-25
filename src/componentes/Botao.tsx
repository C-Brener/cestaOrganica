import React, {ReactNode} from "react";
import { TouchableOpacity, Alert, StyleSheet, TouchableOpacityProps} from "react-native";

interface props extends TouchableOpacityProps{
    children : ReactNode
}
const Botao = ({children, ...rest}:props)=>{
    return<>
        <TouchableOpacity style={estilos.botao} {...rest}>
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