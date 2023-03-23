import * as React from "react";
import { Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';



export default function App() {
  const [pet, setPet] = useState();

  const loadPet = async () => {
    const res = await fetch("http://pet-library.moonhighway.com/api/randomPet")
    const data = await res.json();
    setPet(data);
  }

  useEffect(() => {
    loadPet();
  }, []);

  if (!pet) return null;

  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.pic} source={{uri: pet.photo.full }} />
        <Text style={styles.paragraph}>{pet.name} - {pet.category}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    felx: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pic: {
    height: 500,
    width: 500
  }
});

