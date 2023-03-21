import React from 'react';
import { View, Button, Text } from 'react-native';

const Contacts = ({ navigation }) => {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Nome: João Silva</Text>
        <Text>Telefone: (19)987072221</Text>
        <Button
          title='see Informations'
          onPress={() => navigation.navigate('Informations',{
            nome: 'João Silva',
            telefone: 19987072221,
            endereco: 'Rua Martilia rosabana, 231',
            profissao: 'carpinteiro',
            email: 'joaosilva@carpintaria.com.br'
          })}
        />

        <Text style={{marginTop: 20}}>Nome: Maria Rosaio</Text>
        <Text>Telefone: (11)987072219</Text>
        <Button
          title='see Informations'
          onPress={() => navigation.navigate('Informations', {
            nome: 'Maria Rosaio',
            telefone: 11987072219,
            endereco: 'Rua Das Flores, 92',
            profissao: 'médica',
            email: 'mariarosaio@clinicas.com.br'
          })}
        />
      </View>
    )
}

export default Contacts;