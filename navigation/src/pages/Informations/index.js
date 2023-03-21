import React from 'react';
import { View, Button, Text} from 'react-native';

const Informations = ({ route }) => {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Nome: {route.params.nome}</Text>
        <Text>Telefone: {route.params.telefone}</Text>
        <Text>Endereço: {route.params.endereco}</Text>
        <Text>Profissão: {route.params.profissao}</Text>
        <Text>Email: {route.params.email}</Text>
      </View>
    )
}

export default Informations;