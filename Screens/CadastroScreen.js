
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import axios from 'axios';


export default function CadastroUsuario({ navigation }) {

    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
  
    async function salvar() {
      try {
        const usuario = {
          nome,
          cpf,
          email,
          senha
        };
  
        await axios.post('http://localhost:192.168.1.104/usuarios', usuario);
  
        alert('Usuário cadastrado!');
        navigation.goBack();
  
      } catch (error) {
        console.log(error);
        alert('Erro ao cadastrar usuário');
      }
    }




  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

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
