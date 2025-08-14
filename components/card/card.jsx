import { Text, StyleSheet, View } from "react-native";



export const Card = () => {
    return (
        <>
            <View style={styles.card} showsVerticalScrollIndicator={true}>
                <View>
                    <Text style={styles.tituloValor}>
                        CEP:
                    </Text>
                    <Text style={styles.valor}>
                        Dado 01
                    </Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>
                        Longradouro:
                    </Text>
                    <Text style={styles.valor}>
                        Dado 02
                    </Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>
                        Bairro:
                    </Text>
                    <Text style={styles.valor} >
                        Dado 03
                    </Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>
                        UF:
                    </Text>
                    <Text style={styles.valor} >
                        Dado 04
                    </Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>
                        Estado:
                    </Text>
                    <Text  style={styles.valor}>
                        Dado 05
                    </Text>
                </View>
                <View>
                    <Text style={styles.tituloValor}>
                        Região:
                    </Text>
                    <Text style={styles.valor}>
                        Dado 06
                    </Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        minHeight: '40%',
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
        marginBottom: 120,
        gap: 20

    },
    tituloValor: {
        fontWeight: 600
    }

})