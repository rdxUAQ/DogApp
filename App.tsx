import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';

export default function App() {

  const [dog, setDog] = useState('');
  const [dogData, setDogData] = useState(null);
  const [error, setError] = useState(null);
  
  const fetchDogApp = async () => {
    
    const x_api_key = 'live_362rpNfPUVZkdZIgHTzK2qaJUMkuMVPIehAsswifE6Qt90z4YqRCADyd10eZ91ll'
    
    try{
      const res = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await res.json();
      setDogData(data);
      setError(null);
    }
    catch (e){
      console.error(e)
      setError('Error fetching Dog data');
    }
  };

  useEffect( () => {
    dog ? fetchDogApp : setError;
  }, [dog]);

  console.log(dogData);

  return (
    <SafeAreaView style={styles.container}>

      <View>
        <Text style={styles.title}>Random Dog App</Text>
        
        {error && (<Text>{error}</Text>)}
      {dogData && (
        <View style={styles.clima}>
          <>
          <Image
            style={styles.imgdog}
            source={{uri: dogData.message}}/>
          
          </>
         
        </View>
      )}
        
        <TouchableOpacity 
          style={styles.button}
          onPress={fetchDogApp}>
          <Text>RANDOM</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={fetchDogApp}>
          <Text>SELECT</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={fetchDogApp}>
          <Text>DELETE</Text>
        </TouchableOpacity>

      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom:20,
    alignContent: 'center',
    backgroundColor: '#99C3D1',
    height:'100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0BD5C4',
    width: 250,
    height: 35,
    borderRadius: 5,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '15%',
  },
  imgdog:{
    marginTop: 20,
    alignItems: 'center',
    justifyContent:'center',
    width: 300,
    height: 300,

  },
  clima:{
    
    marginTop: 100,
    alignItems: 'center',
    justifyContent:'center',
    elevation: 5,
    borderRadius: 10, 
    marginLeft: 6,
    
  },
});