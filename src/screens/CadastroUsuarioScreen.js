import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import api from '../services/api';

function CadastroUsuarioScreen({ navigation }) {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const Cadastrar = async () => {
    try {
      const usuario = {
        nome,
        cpf,
        email,
        senha
      }
      await api.post('/usuarios', usuario)

      alert('Usuário cadastrado com sucesso!');
      console.log(usuario);
      navigation.goBack();
    } catch (e) {
      console.log(e);
      alert('Erro ao cadastrar usuário');
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
          value={nome}
          onChangeText={setNome}
          placeholder='Digite seu nome...' />
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
          CPF
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
          value={cpf}
          onChangeText={setCpf}
          placeholder='Digite seu CPF...' />
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
          value={email}
          onChangeText={setEmail}
          placeholder='Digite seu email...' />
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
          Senha
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
          value={senha}
          onChangeText={setSenha}
          placeholder='Digite sua senha...' />
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
            padding: 10
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
export default CadastroUsuarioScreen;