import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rotas from './rotas/index.js';
import { AuthProvider } from './context/Context.js';


const Stack = createNativeStackNavigator()
export default function App() {

  return (
    <NavigationContainer>

      <AuthProvider>
      <Rotas />
      </AuthProvider>
       
    </NavigationContainer>
  );
}