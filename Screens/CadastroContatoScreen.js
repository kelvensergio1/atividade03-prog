import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import api from '../services/api';

export default function CadastroContato({ navigation }) {

  const [usuario_id] = useState(1);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  async function salvar() {
    try {
      await api.post('/contatos', {
        usuario_id,
        nome,
        telefone,
        email
      });

      alert('Contato cadastrado!');
      navigation.goBack();

    } catch (error) {
      console.log(error);
      alert('Erro ao cadastrar contato');
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
  }
});