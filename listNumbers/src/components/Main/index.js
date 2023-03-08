import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';

export default function Main(){

    // states
    const [number, setNumber] = useState(null);
    const [listNumber, setListNumber] = useState([]);

    // add number to list
    const addToList = () => {

        if (Number(number) == 0){
            setListNumber([])
        }
        else{
            let value = String(number).replace(',','.'); // changing , by .
            setListNumber((arr) => [...arr, {
                id: new Date().getTime(),
                n: value
            }])
        }   

    }

    const validateNumber = () => {
        /** to-do: 
         * txtInput is null?
        */
    }

    return(
        <View style={styles.mainContext}>
            
            <Text style={styles.labelForm}>NUMBER:</Text>
                <TextInput
                    style={styles.inputForm}
                    placeholder="0 to clear list"
                    keyboardType="numeric"
                    onChangeText={setNumber}
                    value={number}
                />

            <TouchableOpacity onPress={() => addToList()} style={styles.button}>
                <Text style={styles.textButton}>ADD TO LIST</Text>
            </TouchableOpacity>


            <FlatList 
                data={listNumber}
                style={styles.flat}
                keyExtractor={
                    (item) => {item.id}
                }

                renderItem={
                    ({item}) => {
                    return(
                        <Text style={styles.itemFlat}>
                            {item.n}
                        </Text>
                    )
                }
            } 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContext:{
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        borderTopLeftRadius: 30, // arredondar a borda superior esquerda
        borderTopRightRadius: 30, // arredondar a borda superior direita
        marginTop: 30,
    },

    button:{
        borderRadius:50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        backgroundColor: '#2196CC',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 10,
    },

    textButton:{
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold'
    },

    inputForm:{
        width:'90%',
        borderRadius: 50, // arredondando bordas
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12, 
        paddingLeft: 10
    },

    labelForm:{
        fontSize: 18,
        paddingLeft: 20,
        marginTop: 40,
        marginRight: '55%',
        width: '40%'
    },

    flat:{
        marginTop: 20,
    },

    itemFlat:{
        fontSize: 15,
        padding: 1,
        fontWeight: 'bold'
    }
});