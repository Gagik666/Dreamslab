import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../ui/login/Login';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
  }