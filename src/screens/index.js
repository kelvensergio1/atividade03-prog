import { registerRootComponent } from 'expo';

import App from '../../App';
export { default as LoginScreen } from './LoginScreen';
export { default as ListaContatoScreen } from './ListaContatoScreen';
export { default as CadastroUsuarioScreen } from './CadastroUsuarioScreen';
export { default as CadastroContatoScreen } from './CadastroContatoScreen';
export { default as AlteracaoContatoScreen } from './AlteracaoContatoScreen';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
