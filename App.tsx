import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert
} from 'react-native'
const handle=()=>{
 Alert.alert('Pressed : I love you') 
}
function App(){

  return(
    <SafeAreaView>
    <View>
      <Text> Hello World !</Text>
      <Text> Hello World !</Text>
      <Text> Hello World !</Text>
      <Text> Hello World !</Text>
      <Text> Hello World !</Text>
      <Text> Hello World !</Text>
<Button title="Click me" onPress={handle}></Button>
    </View>
  </SafeAreaView>
  );
}

export default App;