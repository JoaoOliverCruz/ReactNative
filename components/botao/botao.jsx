import { Pressable, Text, StyleSheet } from "react-native"

export const Botao = ({tituloBotao, onPress}) => {
    return(
        <Pressable style={styles.botao} onPress={onPress}>
            <Text style={styles.textoBotao}>
                {tituloBotao}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    botao:{
        backgroundColor: '#00AAEE',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: '70%',
        alignItems: 'center',
    },
    textoBotao: {
        fontFamily: 'Poppins-Bold',
        color: "#FFFFFF",
        fontSize: 16
    }
    
})