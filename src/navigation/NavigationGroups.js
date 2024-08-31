import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from '../components/Settings';
import Workouts from '../components/Workouts';
import Home from '../components/Home';
import AddWorkout from '../components/AddWorkout';
import { useTheme } from 'react-native-paper';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()
const screenOptions = {
    
}
const WorkoutGroup = () => {
    return (
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center'}}>
            <Stack.Screen name='Home' component={Home} options={{ title: 'Home'}} />
            <Stack.Screen name='AddWorkout' component={AddWorkout} options={{ title: 'Add a Workout'}}/>
        </Stack.Navigator>
    )
}
const TabGroup = () => {
    const theme = useTheme()
    return (
        <Tab.Navigator initialRouteName='WorkoutGroup' screenOptions={{
            headerTitleAlign: 'center',
            tabBarActiveTintColor: theme.colors.secondary,
        }}>
            <Tab.Screen name="Workouts" component={Workouts}/>
            <Tab.Screen name='WorkoutGroup' component={WorkoutGroup} options={{ headerShown: false}} />
            <Tab.Screen name="Settings" component={Settings} options={{ title: 'Settings'}}/>
        </Tab.Navigator>
    )
}

export default TabGroup