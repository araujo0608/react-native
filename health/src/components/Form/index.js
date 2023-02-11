import React, { useState } from "react";
import { View, TextInput, Text, Button} from "react-native";
import ResultImc from './ResultImc';

export default function Form(){
    
// Estados
const [height, setHeight] = useState(null); // por padrão vai ser nulo
const [weight, setWeight] = useState(null);
const [messageImc, setMessageIcm] = useState("Preencha o peso e a altura");
const [imc, setImc] = useState(null);
const [textButton, setTextButton] = useState("Calcular");

function imcCalculator(){
    return setImc((weight / (height * height)).toFixed(2))
}

function validationImc(){
    if (height != null && weight != null){ // Se peso e altura estiverem com dados
        imcCalculator();
        setHeight(null);
        setWeight(null);
        setMessageIcm(`Seu imc é igual a: `);
        setTextButton(`Calcular novamente`);
        return 
    }
    else{
        setImc(null);
        setTextButton("Calcular");
        setMessageIcm("Preencha o peso e a altura!")
    }
}

    return(
        <View>
            
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Ex: 1.75" keyboardType="numeric" onChangeText={setHeight}
                value={height}/>

                <Text>Peso</Text>
                <TextInput placeholder="Ex: 82.1" keyboardType="numeric" onChangeText={setWeight}
                value={weight}/>
                
                <Button title={textButton} onPress={() => validationImc()}/>
            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc}/>

        </View>
    );
}