import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        width: '100%', // largura de 100% da View Form
        height: '100%', // altura de 100% da View Form
        bottom: 0, // fazer a view descer até "chão" da tela
        backgroundColor: '#ffffff',
        alignItems: 'center',
        borderTopLeftRadius: 30, // arredondar a borda superior esquerda
        borderTopRightRadius: 30, // arredondar a borda superior direita
        marginTop: 30,
    },

    form:{
        width: '100%',
        height: 'auto', // importante deixar em Auto para que possamos inserir novos elementos e ele não estourar
        marginTop: 30,
        padding: 10
    },

    formLabel:{
        color: '#000000',
        fontSize: 18,
        paddingLeft: 20
    },

    formInput:{
        width:'90%',
        borderRadius: 50, // arredondando bordas
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12, 
        paddingLeft: 10
    },

    buttonCalc:{
        borderRadius:50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#ff0043',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30
    },  

    textButtonCalculator:{
        fontSize: 20,
        color: '#ffffff'
    }
});

export default styles;