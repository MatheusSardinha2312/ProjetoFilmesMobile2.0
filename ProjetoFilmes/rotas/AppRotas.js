import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Movies from '../src/components/movies/index.js';

const Stack = createNativeStackNavigator();

export default function AppRotas (){
    
    return(
        <Stack.Navigator>
            <Stack.Screen name='Movies' component={Movies} options= {{ headerShown: false}}/>
        </Stack.Navigator>
    );
}
