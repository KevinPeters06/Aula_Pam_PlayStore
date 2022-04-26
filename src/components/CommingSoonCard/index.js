import {Image, Text, StyleSheet, View, TouchableOpacity} from 'react-native'

function CommingSoonCard({imagem, nome, data}){
    return (
        <TouchableOpacity>
            <View style={estilo.container}>
                <Image source={require(`../../imagens/${imagem}`)} style={estilo.imagem} />
                <Text style={estilo.nome}>{nome}</Text>
                <Text style={estilo.data}>{data}</Text>
            </View>
        </TouchableOpacity>
    )
}

const estilo = StyleSheet.create({
    container: {
        width: 300,
        margin:5
    },
    imagem: {
        width: "100%",
        height: 150,
        borderRadius: 10,
    },
    data: {
        width: "100%",
        textAlign: 'right',
        color: "green"
    },
    nome: {
        width: "100%",
        textAlign: "center",
        fontWeight: "bold"
    }
})

export {CommingSoonCard}