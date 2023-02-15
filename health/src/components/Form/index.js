import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity} from "react-native";
import ResultImc from './ResultImc';
import styles from "./style";

export default function Form(){
    
// Estados
const [height, setHeight] = useState(null); // por padrão vai ser nulo
const [weight, setWeight] = useState(null);
const [messageImc, setMessageIcm] = useState("Preencha o peso e a altura");
const [imc, setImc] = useState(null);
const [textButton, setTextButton] = useState("Calcular");
const [imcCategory, setImcCategory] = useState(null)

function imcCalculator(){
    return setImc((weight / (height * height)).toFixed(2))
}

function validationCategory(){
    var category = ''
    console.log(Number(imc))
    if (Number(imc) < 18.5){
        category = String('abaixo do peso')
    } else if(Number(imc) < 25){
        category = String('normal')
    } else if(Number(imc) < 30){
        category = String('sobrepeso')
    } else {
        category = String('Obesidade')
    }
    return setImcCategory(category)
}

function validationImc(){
    if (height != null && weight != null){ // Se peso e altura estiverem com dados
        imcCalculator();
        validationCategory();
        setHeight(null);
        setWeight(null);
        setMessageIcm(`Seu IMC é igual a: `);
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
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput placeholder="Ex: 1.75" keyboardType="numeric" onChangeText={setHeight}
                value={height} style={styles.formInput}/>

                <Text style={styles.formLabel}>Peso</Text>
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

        </View>
    );
}