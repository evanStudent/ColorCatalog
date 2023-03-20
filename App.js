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
  ProgressBarAndroid,
  Image
 } from 'react-native';

 import picBiscuit from './assets/biscuit.jpg';
 import picJungle from './assets/jungle.jpg';

export default function App() {
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleDateString()} button press`)
  }
  return (
    <View style={styles.page}>
      <Image style={styles.image} source={picBiscuit} />
      <Image style={styles.image} source={picJungle} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    borderRadius: 50,
    margin: 10,
    width: Dimensions.get('window').width-10
  }
});
