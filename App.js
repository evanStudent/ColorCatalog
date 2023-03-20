import { useState } from 'react'
import {
  StyleSheet,
  Text, 
  View }
from 'react-native';

 import picBiscuit from './assets/biscuit.jpg';
 import picJungle from './assets/jungle.jpg';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={styles.button}
        onPress={() => setBackgroundColor('green')}>green</Text>
      <Text style={styles.button}
        onPress={() => setBackgroundColor('red')}>red</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex:1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10,
  }
});
