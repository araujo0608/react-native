import React from 'react';
import { View, Button } from 'react-native';

const Contacts = ({navigation}) => {
    return(
      <View>
        <Button
          onPress={() => navigation.navigate("Informations")}
          title="go to Informations page"
        />
      </View>
    )
}

export default Contacts;