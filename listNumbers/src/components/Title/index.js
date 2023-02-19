import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Title(){

    // states
    const [title, setTitle] = useState("LIST NUMBERS")

    return(
        <View style={styles.titleContext}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    );
}

// styles
const styles = StyleSheet.create({
    titleContext:{
        alignItems: 'center', // alinhar os childrens para o centro
        justifyContent: 'center', // alinhar horizontalmente e verticalmente
        padding: 10
    },

    titleText:{
        fontFamily: 'system-ui',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#21453A'
    }
});