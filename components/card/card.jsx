import { Text, StyleSheet, View } from "react-native";
import { useState } from "react";


export const Card = ({cep, logradouro, bairro, uf, estado, regiao}) => {
  
    return (
        <>
            
            <View style={styles.card} showsVerticalScrollIndicator={true} >
                <View>
                    <Text style={styles.tituloValor}>
                        CEP:
                    </Text>
                    <Text style={styles.valor}>
                        {cep}
                    </Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>
                        Logradouro:
                    </Text>
                    <Text style={styles.valor}>
                        {logradouro}
                    </Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>
                        Bairro:
                    </Text>
                    <Text style={styles.valor} >
                        {bairro}
                    </Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>
                        UF:
                    </Text>
                    <Text style={styles.valor} >
                        {uf}
                    </Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>
                        Estado:
                    </Text>
                    <Text  style={styles.valor}>
                        {estado}
                    </Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>
                        Região:
                    </Text>
                    <Text style={styles.valor}>
                        {regiao}
                    </Text>
                </View>

        </View>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        minHeight: '30%',
        width: '70%',
        padding: 20,
        //   backgroundColor: 'white',
        //   elevation: 2,
        //   shadowColor: '#b2b2b2ff',
        //   shadowOffset: {width: 0, height: 2},
        //   shadowOpacity: 0.5,
        //   shadowRadius: 2,
        //   backgroundColor: 'blue'
        borderRadius: 7,
        boxShadow: 'rgba(0,0,0, 0.15) 1.95px 1.95px 2.6px 2.00px',
        marginBottom: 300,
        gap: 20

    },
    tituloValor: {
        fontFamily: 'Poppins-Bold',
        fontWeight: 600,

    },
    valor: {
        fontFamily: 'Poppins-Bold'
    }
    

})