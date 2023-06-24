import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../paginas/login';
import Cadastro from '../pages/cadastro';


const Stack = createNativeStackNavigator()

export default function AuRotas(){

    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name='Cadastro' component={Cadastro} options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
    );
}
