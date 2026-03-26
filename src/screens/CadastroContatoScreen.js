import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import api from "../services/api";

function CadastroContatoScreen({ navigation }) {
  
  const[usuario_id, setUsuario_id] = useState(1);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const Cadastrar = async () => {
    try{
      const contato = {
        usuario_id,
        nome,
        telefone,
        email
      };

      await api.post('/contatos', contato);

      alert('Contato cadastrado com sucesso!');
      console.log(contato);
      navigation.goBack();
    }catch(e){
      console.log(e);
      alert('Erro ao cadastrar contato');
    }
  }
  return (
    <View
      style={{
      }}>
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
          onPress={Cadastrar}
        >
          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
          }}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
export default CadastroContatoScreen;