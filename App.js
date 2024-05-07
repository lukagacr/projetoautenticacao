import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View , Button} from 'react-native';
import firebase from './src/firebaseConnection'
import { useState, UseEffect} from 'react'

export default function App() {
  const [ email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function cadastrar(){

  }

  return (
    <View style={styles.container}>
     <TextInput
     style={styles.input}
     onChangeText={(texto)=>setEmail(texto)}
     value={email}
     placeholder='Digite  o seu e-mail'
    />
     <TextInput
     style={styles.input}
     onChangeText={(texto)=>setSenha(texto)}
     value={senha}
     placeholder='Digite a sua senha'
     />
     <Button
     title='Cadastrar'
     onPress={cadastrar}
     />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:20
   },
   input:{
     widht:200,
     heigh:150,
     borderWidth:2,
     borderColor:'black',
     borderRadius:50,
     padding:5,

   }
});
