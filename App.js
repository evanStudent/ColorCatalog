import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text, 
  View, 
  Button, 
  ActivityIndicator, 
  ProgressViewIOS, 
  Alert, 
  Dimensions,
  Platform,
  ProgressBarAndroid
 } from 'react-native';

const { height, width } = Dimensions.get('window');

export default function App() {
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleDateString()} button press`)
  }
  return (
    <View style={styles.page}>
      <Text style={styles.text}>red</Text>
      <Text style={[styles.text, styles.selectedText]}>green</Text>
      <Text style={styles.text}>blue</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    marginTop: 40,
    backgroundColor: '#DDD'
  },
  text: {
    fontSize: 22,
    color: 'red',
    backgroundColor:'yellow',
    margin: 10,
    padding: 5
  },
  selectedText: {
    backgroundColor: 'red',
    color: 'yellow'
  }
});
