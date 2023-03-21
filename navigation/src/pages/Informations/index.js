import React from 'react';
import { View, Button } from 'react-native';

const Informations = (props) => {
    return(
      <View>
        <Button
          title='go to Contacts page'
          onPress={() => props.navigation.navigate("Contacts")}
        />
      </View>
    )
}

export default Informations;