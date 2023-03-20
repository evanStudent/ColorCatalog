import { useState } from 'react'
import {
  StyleSheet,
  Text, 
  TouchableHighlight, 
  View }
from 'react-native';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <TouchableHighlight style={styles.button}>
        <View>
          <View style{styles.sample, {backgroundColor: "yellow"}} />
          <Text style={styles.buttonText}>yellow</Text>
        </View>

      </TouchableHighlight>
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
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10, 
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center'
  },
  sample: {
    height: 20,
    width: 20,
    backgroundColor: 'white'
  }
});
