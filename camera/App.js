import { useState, useRef } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Button, Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons"; // ícones do expo
import styles from './style';

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const camRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);

  if (!permission) {
    // Permissão da camera ainda esta carregando
    return <View />;
  }

  if (!permission.granted) {
    // Permissão da câmera ainda não foi aceita
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Precisamos da sua permissão para acessar a câmera</Text>
        <Button onPress={requestPermission} title="dar permissão" />
      </View>
    );
  }

  // função que troca entre camera traseira e frontal
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  // função assíncrona que tira a foto
  async function takeShot(){
    if(camRef){
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri)
      setOpen(true);
    }
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={camRef}>
        <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.btnFlip} onPress={toggleCameraType}>
            {/*<Text style={styles.text}>Flip Camera</Text>*/}
            <FontAwesome name='exchange' size={23}/>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btnShot} onPress={takeShot}>
            {/*<Text style={styles.text}>Photo</Text>*/}
            <FontAwesome name='camera' size={23}/>
          </TouchableOpacity>
        
        </View>
      </Camera>

      {
      capturedPhoto 
      &&
        <Modal transparent={true} visible={open} animationType="slide">
            <View style={styles.contentModal}>
              
              <TouchableOpacity style={styles.btnCloseModal} onPress={() => setOpen(false)}>
                <FontAwesome name='close' size={50} color="#fff"/>
              </TouchableOpacity>
            
              <Image style={styles.imgPicture} source={{ uri : capturedPhoto }}/>
           
           </View>
        </Modal>
      }
    </View>
  );
}