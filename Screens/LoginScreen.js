import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import api from '../services/api';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function logar() {
        if (!email || !senha) {
            alert('Preencha tudo');
            return;
        }

        try {
            const response = await api.get(`/usuarios?email=${email}&senha=${senha}`);

            if (response.data.length > 0) {
                navigation.navigate('Lista');
            } else {
                alert('Email ou senha inválidos');
            }

        } catch (error) {
            console.log(error);
            alert('Erro ao conectar');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput placeholder="Email" onChangeText={setEmail} style={styles.input}/>
            <TextInput placeholder="Senha" secureTextEntry onChangeText={setSenha} style={styles.input}/>

            <TouchableOpacity style={styles.button} onPress={logar}>
                <Text style={{color:'#fff'}}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor:'red'}]} onPress={() => navigation.navigate("CadastroUsuario")}>
                <Text style={{color:'#fff'}}>Cadastre-se</Text>
            </TouchableOpacity>
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
    button: {
        backgroundColor: 'blue',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5
    }
});