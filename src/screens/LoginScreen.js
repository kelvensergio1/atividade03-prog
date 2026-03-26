import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import api from '../services/api';



function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  async function Logar(){
    try {
      if (!email || !senha) {
        alert('Preencha o email e a senha');
        return;
      }
      api.get(`/usuarios?email=${email}&senha=${senha}`)
        .then(function (res) {
          if (res.data.length > 0) {
            navigation.navigate('ListaContato');
          } else {
            alert('Email ou senha incorretos');
          }
        }).catch(function (e) {
          console.log(e);
          alert('Erro na conexao da API');
        });
    } catch (e) {
      console.log('Erro ao logar:', e.message);
      alert('Erro', 'Não foi possivel conectar à API');
    }
  }

  return (
    <View>
      <StatusBar style="auto" />

      <View>
        <Text
          style={{
            fontSize: 32,
            fontWeight: '600',
            textAlign: 'center',
            marginTop: 30,
            color: '#0080ff'
          }}>
          Seja, Bem-Vindo!
        </Text>
      </View>
      {/*Foto perfil*/}
      <View
        style={{
          margin: 'auto',
          marginTop: 50,
          marginBottom: 70
        }}>
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 50
          }}
          source={require('../../assets/images/fotoperfil.png')}
        />
      </View>


      {/*Login*/}
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
          keyboardType='email-address'
          value={email}
          onChangeText={setEmail}
          placeholder='Digite seu email...' />
      </View>


      {/*Senha*/}
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
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          placeholder='Digite sua senha...'
        />
      </View>


      {/*Buttons*/}
      <View style={{
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
          onPress={Logar}>

          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
          }}>
            Login
          </Text>

        </TouchableOpacity>

      </View>

      <View
        style={{
          cursor: 'pointer',
          marginLeft: 110,
          marginRight: 110,
          marginBottom: 15,
        }}>

        <TouchableOpacity
          style={{
            backgroundColor: '#0080ff',
            borderRadius: 10,
            padding: 10,
          }}
          onPress={() => {
            navigation.navigate('CadastroUsuario');
          }}
        >

          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
          }}>
            Cadastre-se
          </Text>

        </TouchableOpacity>
      </View>


    </View>
  );
}
export default LoginScreen;