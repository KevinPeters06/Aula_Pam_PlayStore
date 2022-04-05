import React from 'react';
import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Botao({logo,texto,cor,logo2,texto2,cor2}){

    return(
        <View style={estilo.containerBotoes1}>
            <TouchableOpacity style={[estilo.botoes , {backgroundColor:cor}]}>
                <Ionicons name= {logo} size= {20} color="white"
                    style= {{marginRight:10}}/>

                <Text style ={estilo.textoBotao} > {texto} </Text>

            </TouchableOpacity>

            <TouchableOpacity style={[estilo.botoes , {backgroundColor:cor2}]}>
                <Ionicons name= {logo2} size={20} color="white"
                    style= {{marginRight:10}}/>
                <Text style ={estilo.textoBotao} > {texto2} </Text>

            </TouchableOpacity>

        </View>
    )
}

const estilo = StyleSheet.create({
    
    containerBotoes1:{
        flexDirection:'row',
        marginBottom:10,
        justifyContent:"center"

    },

    textoBotao:{
        color:'white',
        fontWeight:'bold'
    },

    botoes:{
        padding:5,
        marginHorizontal:10,
        width:'45%',
        alignItems:'center',
        justifyContent:'flex-start',

        fontSize:12,
        color:'white',
        flexDirection:'row',
        borderRadius: "8px"
    }
})