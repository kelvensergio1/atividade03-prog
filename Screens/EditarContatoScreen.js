
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



export default function EditarContato({ route, navigation }) {

  const { contato } = route.params;

  const [nome, setNome] = useState(contato.nome);
  const [telefone, setTelefone] = useState(contato.telefone);
  const [email, setEmail] = useState(contato.email);

  function alterar() {
    const atualizados = contatos.map(c =>
      c.id === contato.id ? { ...c, nome, telefone, email } : c
    );

    setContatos(atualizados);
    navigation.goBack();
  }

  function excluir() {
    const filtrados = contatos.filter(c => c.id !== contato.id);
    setContatos(filtrados);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Contato</Text>

      <TextInput style={styles.input} value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} />
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Button title="Alterar" onPress={alterar} />
      <Button title="Excluir" onPress={excluir} />
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
