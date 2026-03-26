import * as React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import ListaContatoScreen from './src/screens/ListaContatoScreen';
import CadastroUsuarioScreen from './src/screens/CadastroUsuarioScreen';
import CadastroContatoScreen from './src/screens/CadastroContatoScreen';
import AlteracaoContatoScreen from './src/screens/AlteracaoContatoScreen';

const Stack = createNativeStackNavigator();


function App(){
return (
<NavigationContainer>

<Stack.Navigator>

<Stack.Screen 
  name="Login" 
  component={LoginScreen}
  options={{
    title: 'Login', 
    headerTitleAlign: 'center',
    headerTitleStyle:{fontWeight:'bold'},
    headerTintColor: '#ffffff',
    headerStyle:{backgroundColor: '#0080ff'}
  }}/>

<Stack.Screen 
  name="ListaContato"
  component={ListaContatoScreen}
  options={({navigation}) => ({
    title: 'Lista de Contatos', 
    headerTitleAlign: 'center',
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate('CadastroContato')}>
        <Text style={{color: '#ffffff', fontSize: 32, marginRight: 15}}>+</Text>
      </TouchableOpacity>
    ),
    headerTitleStyle:{fontWeight:'bold'},
    headerTintColor: '#ffffff',
    headerStyle:{backgroundColor: '#0080ff'},
    headerBackVisible: false
})}/>

<Stack.Screen 
  name="CadastroUsuario" 
  component={CadastroUsuarioScreen} 
  options={{
    title: 'Cadastro de Usuário', 
    headerTitleAlign: 'center',
    headerTitleStyle:{fontWeight:'bold'},
    headerTintColor: '#ffffff',
    headerStyle:{backgroundColor: '#0080ff'},
  }}
/>

<Stack.Screen 
name="CadastroContato" 
component={CadastroContatoScreen}
options={{
  title: 'Cadastro de Contato',
  headerTitleAlign: 'center',
  headerTitleStyle:{fontWeight:'bold'},
  headerTintColor: '#ffffff',
  headerStyle:{backgroundColor: '#0080ff'},
}}/>

<Stack.Screen name="AlteracaoContato"
component= {AlteracaoContatoScreen}
options={{
  title: 'Alteração de Contato',
  headerTitleAlign: 'center',
  headerTitleStyle:{fontWeight:'bold'},
  headerTintColor: '#ffffff',
  headerStyle:{backgroundColor: '#0080ff'},
}}/>

</Stack.Navigator>

</NavigationContainer>
);
}

export default App;