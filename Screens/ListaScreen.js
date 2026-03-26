
import { useState,useEffect } from 'react';
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


export default function Lista({ navigation }) {

    const [contatos, setContatos] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3000/contatos')
        .then(response => {
          setContatos(response.data);
        })
        .catch(error => {
          console.log('Erro ao buscar contatos:', error);
        });
    }, [contatos]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Contatos</Text>

      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate("EditarContato", {
                contato: item
              })
            }
          >
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>{item.telefone}</Text>
          </TouchableOpacity>
        )}
      />
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
