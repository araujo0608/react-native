import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';

export default function Main(){

    // states
    const [number, setNumber] = useState(null);
    const [listNumber, setListNumber] = useState([]);

    // add number to list
    const addToList = () => {

        setListNumber((arr) => [...arr, {
            id: new Date().getTime(),
            n: number
        }])

    }

    const validateNumber = () => {
        /** to-do: 
         * txtInput is null?
        */
    }

    return(
        <View style={styles.mainContext}>

            <Text>NUMBER</Text>
            <TextInput 
                placeholder="ex: 21"
                keyboardType="numeric"
                onChangeText={setNumber}
                value={number}
            />

            <TouchableOpacity onPress={() => addToList()}>
                <Text>ADD TO LIST</Text>
            </TouchableOpacity>

            <FlatList 
                data={listNumber.reverse()}

                keyExtractor={
                    (item) => {item.id}
                }

                renderItem={
                    ({item}) => {
                    return(
                        <Text>
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
    }
});