import React from "react";
import { View, Text } from "react-native";
import styles from "./style"; // importando estilos

export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>CÁLCULO DE IMC</Text>
        </View>
    );
}