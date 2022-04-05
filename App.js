
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/Botao";
import Jogos from "./src/components/jogos";
import JOGOS from "./src/dados/jogos";


export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Cabecalho></Cabecalho>
      <Botao texto="Apps" logo="logo-android" logo2="game-controller" texto2='Jogos' cor2="purple" cor="#fc034e"/>
      <Botao texto="Filmes" logo="ios-film-outline" logo2="musical-notes" texto2='Musicas' cor2="blue" cor="#fcd303"/>
      <Botao texto="Livros" logo="ios-book" logo2="newspaper-outline" texto2='Noticia' cor2="red" cor="#03c6fc"/>

      <View>
        <FlatList
          horizontal
          contentContainerStyle={estilos.jogos}
          data = {JOGOS}
          keyExtractor = {(item) => item.id}
          renderItem = {({item}) => (
            <Jogos
              titulo = {item.nome}
              imagem = {item.imagem}
              valor = {item.valor}
            />
          )}
          />


      </View>

      <Image source={require('./src/imagens/banner.jpg')} style={{width: 500, height: 400 }} />

     </View>
  );
}

const estilos = StyleSheet.create({
  jogos: {
    justifyContent: 'center',
    flexGrow: 1
  }
})
