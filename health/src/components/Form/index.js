import React from "react";
import { View, TextInput, Text, Button} from "react-native";
import ResultImc from './ResultImc';

export default function Form(){
    return(
        <View>
            
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Ex: 1.75" keyboardType="numeric"/>
                <Text>Peso</Text>
                <TextInput placeholder="Ex: 82.1" keyboardType="numeric"/>
                <Button title="CALCULAR IMC"/>
            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc}/>

        </View>
    );
}