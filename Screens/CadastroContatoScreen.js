
import axios from 'axios';
import { useState, useEffect} from 'react';
import {View,Text,TextInput,Button,FlatList,TouchableOpacity,StyleSheet} from 'react-native';


export default function CadastroContato({ route, navigation }) {

 
  const [usuario_id, setUsuario_id] = useState(1);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');


  async function salvar() {
    try {
      const contato = {
        usuario_id,
        nome,
        telefone,
        email
      };

      await axios.post('http://localhost:192.168.1.104/contatos', contato);

      alert('Contato cadastrado!');
      navigation.goBack();

    } catch (error) {
      console.log(error);
      alert('Erro ao cadastrar usuário');
    }
  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Contato</Text>

      <TextInput style={styles.input} placeholder="Nome" onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Telefone" onChangeText={setTelefone} />
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} />

      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },
  item: {
    padding: 10,
    borderBottomWidth: 1
  },
  nome: {
    fontWeight: 'bold'
  }
});
