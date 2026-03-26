import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';
import api from '../services/api';

export default function EditarContato({ route, navigation }) {

  const { contato, atualizarLista } = route.params;

  const [nome, setNome] = useState(contato.nome);
  const [telefone, setTelefone] = useState(contato.telefone);
  const [email, setEmail] = useState(contato.email);

  function atualizar() {
    api.put(`/contatos/${contato.id}`, {
      ...contato,
      nome,
      telefone,
      email
    })
      .then(() => {
        atualizarLista(); // 🔥 ISSO AQUI RESOLVE
        alert('Atualizado!');
        navigation.goBack();
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text>Editar Contato</Text>

      <TextInput value={nome} onChangeText={setNome} style={styles.input} />
      <TextInput value={telefone} onChangeText={setTelefone} style={styles.input} />
      <TextInput value={email} onChangeText={setEmail} style={styles.input} />

      <Button title="Salvar" onPress={atualizar} />
    </View>
  );
}