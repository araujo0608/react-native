import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Vibration, Pressable, Keyboard} from "react-native";
import ResultImc from './ResultImc';
import styles from "./style";

export default function Form(){
    
// States
const [height, setHeight] = useState(null); // null by default
const [weight, setWeight] = useState(null);
const [messageImc, setMessageIcm] = useState("Preencha o peso e a altura");
const [imc, setImc] = useState(null);
const [textButton, setTextButton] = useState("Calcular");
const [imcCategory, setImcCategory] = useState(null);
const [errorMessage, setErrorMessage] = React.useState(null);


function imcCalculator(){
    let heightFormat = String(height.replace(",", ".")) // changing , by .
    let weightFormat = String(weight.replace(",", ".")) // changing , by .
    heightFormat = Number(heightFormat)
    weightFormat = Number (weightFormat)
    const result = (weightFormat / (heightFormat * heightFormat)).toFixed(2)
    setImc(result)

    let category = ''
    
    if (Number(result) < 18.5){
        category = String('abaixo do peso')
    } else if(Number(result) < 25){
        category = String('normal')
    } else if(Number(result) < 30){
        category = String('sobrepeso')
    } else {
        category = String('Obesidade')
    }

    setImcCategory(category)
    return 
}


function validationImc(){
    if (height != null && weight != null){ // Se peso e altura estiverem com dados
        imcCalculator();
        setHeight(null);
        setWeight(null);
        setErrorMessage(null);
        setMessageIcm(`Seu IMC é igual a: `);
        setTextButton(`Calcular novamente`);
        return 
    }
    else{
        setImc(null);
        setTextButton("Calcular");
        setMessageIcm("Preencha o peso e a altura!");
        setErrorMessage("campo obrigatório*")
        setImcCategory(null);
        Vibration.vibrate(); // faz o telefone vibrar
    }
}

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput placeholder="Ex: 1.75" keyboardType="numeric" onChangeText={setHeight}
                value={height} style={styles.formInput}/>

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                placeholder="Ex: 82.1"
                keyboardType="numeric"
                onChangeText={setWeight}
                value={weight} 
                style={styles.formInput}
                />
                
                <TouchableOpacity onPress={() => validationImc()} style={styles.buttonCalc}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc} resCategory={imcCategory}/>

        </Pressable>
    );
}