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
    <View style={{ padding: 50 }}>
      {Platform.OS === "ios" && <ProgressViewIOS progress={0.5} />}
      {Platform.OS === "android" && (
        <ProgressViewIOS 
          styleAttr="Horizontal"
          indeterminate={false}
          color="blue"
          progress={0.5} 
        />
      )}
      <ActivityIndicator size="large" color="#61DBFB" />
      <Button title="click me" onPress={onButtonPress} />
      <Text>Height: {height} </Text>
      <Text> Width: {width} </Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
