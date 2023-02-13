import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Result from "./Result";


export default function Main(){
    
    // States
    const [number, setNumber] = useState(null);
    const [msgResult, setMsgResult] = useState("Preencha os dados");
    const [doubleNumber, setDoubleNumber] = useState(null);

    function toDouble(){
        if (number != null){
            setDoubleNumber(number * 2);
            setNumber(null);
            setMsgResult("O dobro do número é ")
            return
        }else{
            setMsgResult("[ERRO]: necessário um número");
            setDoubleNumber(null)
        }
    }


    return(
        <View>
            <Text>NUMERO:</Text>
            
            <TextInput 
            placeholder="digite um numero qualquer" 
            keyboardType="numeric" 
            onChangeText={setNumber}
            value={number}
            />

            <Button title="DOBRAR" onPress={() => toDouble()}/>
            <Result numberResult={doubleNumber} msg={msgResult}/>
        </View>
    );
}