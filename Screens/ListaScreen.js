import { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button
} from 'react-native';
import api from '../services/api';

export default function Lista({ navigation }) {

  const [contatos, setContatos] = useState([]);

  function buscarContatos() {
    api.get('/contatos')
      .then(response => {
        setContatos(response.data);
      })
      .catch(error => {
        console.log('Erro ao buscar contatos:', error);
      });
  }

  function deletarContato(id) {
    api.delete(`/contatos/${id}`)
      .then(() => {
        buscarContatos(); // atualiza após deletar
      })
      .catch(error => {
        console.log('Erro ao deletar:', error);
      });
  }

  useEffect(() => {
    buscarContatos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Contatos</Text>

      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("EditarContato", {
                  contato: item,
                  atualizarLista: buscarContatos
                })
              }
            >
              <Text style={styles.nome}>{item.nome}</Text>
              <Text>{item.telefone}</Text>
            </TouchableOpacity>

            <Button
              title="Deletar"
              onPress={() => deletarContato(item.id)}
            />

          </View>
        )}
      />
    </View>
  );
}