import React from "react";
import { View, Text } from "react-native";
import styles from './style'

export default function ResultImc(props){
    return(
        <View style={styles.imcContext}>
            <Text style={styles.msgImc}>{props.messageResultImc}</Text>
            <Text style={styles.resImc}>{props.resultImc}</Text>
            <Text>{props.resCategory}</Text>
        </View>
    );
}