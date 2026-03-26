import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import {View,Text,TextInput,Button,FlatList,TouchableOpacity,StyleSheet} from 'react-native';
import LoginScreen from "./Screens/LoginScreen";
import CadastroScreen from "./Screens/CadastroScreen";
import ListaScreen from "./Screens/ListaScreen";
import CadastroContatoScreen  from './Screens/CadastroContatoScreen';
import EditarContatoScreen from "./Screens/EditarContatoScreen";
const Stack = createNativeStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="CadastroUsuario"
          component={CadastroScreen}
          options={({ navigation }) => ({
            title: 'Cadastro',
            headerTitleAlign: 'center',
           
          })}
        />
        <Stack.Screen
          name="Lista"
          component={ListaScreen}
          options={({ navigation }) => ({
            title: 'Contatos',
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('CadastroContato')}>
                <Text style={{ fontSize: 30, marginRight: 15 }}>+</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="CadastroContato" component={CadastroContatoScreen} />
        <Stack.Screen name="EditarContato" component={EditarContatoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
