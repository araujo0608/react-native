import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    btnFlip: {
      position: 'absolute', // ignora o flex box
      bottom: 1,
      left: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      margin: 10, 
      height: 50,
      width: 50,
      borderRadius: 50
    },
    btnShot: {
      position: 'absolute',
      bottom: 1,
      right: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      margin: 10,
      height: 50,
      width: 50,
      borderRadius: 50
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    contentModal:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      margin: 20
    },
    btnCloseButton:{
      position: 'absolute',
      top: 10,
      left: 2,
      margin: 10
    },
    imgPicture:{
      width: '100%',
      height: 400
    }
  });

  export default styles;