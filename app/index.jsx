import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import {Input} from "../components/input/input"
import {Botao} from "../components/botao/botao";


export default function Index() {
  return (
    <>
      {/* 1. logo + com imagem de fundo */}
      <ImageBackground source={require('../assets/images/fundo.png')}
        style={styles.imgFundo}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo}>
        </Image>
      </ImageBackground >
      {/* 2. Campo de consulta */}
      <View style={styles.container}>
        {/* 2.1. Titulo */}
        <Text style={styles.titulo}> Consulte seu CEP</Text>
        {/* 2.2. input */}
        <Input/>
        {/* 2.3. botão */}
        <Botao tituloBotao='Consultar'/>
        {/* 2.4. card de informação */}
      </View>



    </>
  );
}

//estilos dos meus componentes:
const styles = StyleSheet.create({
  imgFundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',

  },
  logo: {
    width: 100,
    height: 120
  },
  container: {
    flex: 1.5,
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 50,
    gap: 40


  },
  titulo: { 
    fontFamily: "Roboto",
    fontSize: 25, 
    marginTop: 18,
    marginBottom: 10, 
    color: 'black', 
    textAlign: 'center'
  }
})