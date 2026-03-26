import axios from 'axios';
import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function logar() {
        try {
            if (!email || !senha) {
                alert('Preencha email e senha');
                return;
            }

            axios.get(`http://localhost:192.168.1.104/usuarios?email=${email}&senha=${senha}`)
                .then(function (response) {
                    if (response.data.length > 0) {
                        navigation.navigate('Lista');
                    } else {
                        alert('Email ou senha inválidos');
                    }
                }).catch(function (error) {
                    console.log(error);
                    alert('Erro ao conectar à API');
                });

        } catch (error) {
            console.log('Erro ao logar:', error.message);
            alert('Erro', 'Não foi possível conectar à API');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            {/* Imagem de usuário centralizada */}
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }}
                style={styles.userImage}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />

           {/* Botão Login azul */}
           <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={logar}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            {/* Botão Cadastre-se vermelho */}
            <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={() => navigation.navigate("CadastroUsuario")}>
                <Text style={styles.buttonText}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 10,
        alignItems: 'center' // centraliza horizontalmente os itens
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 50, // deixa a imagem redonda
        marginBottom: 20
    },
    input: {
        width: '100%', // ocupa toda a largura do container
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10
    },
    loginButton: {
        backgroundColor: '#007bff' // azul
    },
    registerButton: {
        backgroundColor: '#dc3545' // vermelho
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }
});