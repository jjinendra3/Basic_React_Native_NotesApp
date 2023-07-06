import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app'
import Adder from './Adder'
const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator screenOptions={{headShown:false}}>
      <Stack.Screen name="MyNotes" component={Home} options={{headShown:false}}/>
      <Stack.Screen name="Adder" component={Adder} />
    </Stack.Navigator>
  );
}
export default MyStack;
