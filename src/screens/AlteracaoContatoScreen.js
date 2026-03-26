import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import api from "../services/api";

function AlteracaoContatoScreen({ route, navigation }) {

  const { contatos } = route.params;

  const [id, setId] = useState(contatos.id);
  const [nome, setNome] = useState(contatos.nome);
  const [telefone, setTelefone] = useState(contatos.telefone);
  const [email, setEmail] = useState(contatos.email);

  useEffect(() => {
    const carregarContato = async () => {
      try {
        const res = await api.get(`/contatos/${id}`);
        setNome(res.data.nome);
        setTelefone(res.data.telefone);
        setEmail(res.data.email);
      } catch (e) {
        alert('Erro', 'Erro ao carregar contato');
        console.log(e);
      }
    };
    carregarContato();
  }, [id]);

  const AlteraContato = async () => {
    try {
      await api.put(`/contatos/${id}`, { nome, telefone, email });
      navigation.goBack();
    } catch (e) {
      console.log("Erro ao atualizar:", e);
    }
  };

  const ExcluiContato = async () => {
    try {
      await api.delete(`/contatos/${id}`);
      navigation.goBack();
    } catch (e) {
      console.log('Erro ao excluir:', e)
    }
  }
  return (
    <View>
      <StatusBar style="auto" />

      <View
        style={{
          marginTop: 30,
          marginLeft: 30,
          marginRight: 30,
          marginBottom: 15,
          alignItems: 'left',
          gap: 3,
        }}>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'left',
            fontWeight: '600'
          }}>
          Nome
        </Text>
        <TextInput
          style={{
            fontSize: 14,
            height: 50,
            backgroundColor: '#00000018',
            borderWidth: 3,
            borderRadius: 10,
            borderColor: '#0080ff',
            fontWeight: 500
          }}
          onChangeText={setNome}
          value={nome}
          placeholder='Digite o nome do contato...' />
      </View>

      <View
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginBottom: 15,
          alignItems: 'left',
          gap: 3,
        }}>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'left',
            fontWeight: '600'
          }}>
          Email
        </Text>
        <TextInput
          style={{
            fontSize: 14,
            height: 50,
            backgroundColor: '#00000018',
            borderWidth: 3,
            borderRadius: 10,
            borderColor: '#0080ff',
            fontWeight: 500
          }}
          onChangeText={setEmail}
          value={email}
          placeholder='Digite o Email do contato...' />
      </View>
      <View
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginBottom: 15,
          alignItems: 'left',
          gap: 3,
        }}>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'left',
            fontWeight: '600'
          }}>
          Telefone
        </Text>
        <TextInput
          style={{
            fontSize: 14,
            height: 50,
            backgroundColor: '#00000018',
            borderWidth: 3,
            borderRadius: 10,
            borderColor: '#0080ff',
            fontWeight: 500
          }}
          onChangeText={setTelefone}
          value={telefone}
          placeholder='Digite o telefone do contato...' />
      </View>

      <View
        style={{
          cursor: 'pointer',
          marginTop: 15,
          marginLeft: 110,
          marginRight: 110,
          marginBottom: 10,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#0080ff',
            borderRadius: 10,
            padding: 10,
          }}
          onPress={() => {
            AlteraContato();
          }}
        >
          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
          }}>
            Alterar
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          cursor: 'pointer',
          marginTop: 5,
          marginLeft: 110,
          marginRight: 110,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#fb2626b6',
            borderRadius: 10,
            padding: 10,
          }}
          onPress={() => {
            ExcluiContato();
          }}
        >
          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
          }}>
            Excluir
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default AlteracaoContatoScreen;