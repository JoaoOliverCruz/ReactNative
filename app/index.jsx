import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { Botao } from "../components/botao/botao";
import { Card } from "../components/card/card";
import { Input } from "../components/input/input";
import { useState } from "react";
import axios from "axios";



export default function Index() {

  const [cep, setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({});
  const [mostrarCard, setMostrarCard] = useState(false);

  async function consultarCep() {
    try {
      if (cep !== "" && cep.length === 8) {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

        setJsonCep(resposta.data);
        console.log(resposta.data);
        console.log(setJsonCep.logradouro);
        setMostrarCard(true)
      }else{
        alert("o cep está incorreto. Digite com 8 números!");
      }
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <>
      {/* 1. logo + com imagem de fundo */}
      <ScrollView style={styles.conteinerScroll} showsVerticalScrollIndicator={false}>
        <View style={styles.conteinerImg}>
          <ImageBackground source={require('../assets/images/fundo.png')}
            style={styles.imgFundo}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo}>
            </Image>
          </ImageBackground >
        </View>
        {/* 2. Campo de consulta */}
        <View style={styles.container}>
          {/* 2.1. Titulo */}
          <Text style={styles.titulo}> Consulte seu CEP</Text>
          {/* 2.2. input */}
          <Input
            valorCep={cep}
            onchangeValorCep={e => setCep(e)}/>
          {/* 2.3. botão */}
          <Botao
            tituloBotao='Consultar'
              onPress={consultarCep} />
          {/* 2.4. card de informação */}
          {mostrarCard&&(
            
          <Card 
            cep = {jsonCep.cep}
            logradouro={jsonCep.logradouro}
            bairro={jsonCep.bairro}
            uf={jsonCep.uf}
            estado={jsonCep.estado}
            regiao={jsonCep.regiao}
          />
          )}
        </View>
      </ScrollView>
    </>
  );
}

//estilos dos meus componentes:
const styles = StyleSheet.create({
  imgFundo: {
    // flex: 1,
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
    gap: 40,
    width: "100%",
    minHeight: "100%",
    alignItems: 'center',
    paddingTop: 50,


  },
  conteinerScroll: {
    flex: 1.5,
    height: '100%',
    paddingBottom: 70

  },
  titulo: {
    fontFamily: "Poppins-Bold",
    fontSize: 25,
    marginTop: 18,
    marginBottom: 10,
    color: 'black',
    textAlign: 'center'
  },
  conteinerImg: {
    height: '30%',
  }

})