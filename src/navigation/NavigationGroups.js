import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from '../components/Settings';
import Workouts from '../components/Workouts';
import Home from '../components/Home';
import AddWorkout from '../components/AddWorkout';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

const WorkoutGroup = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='AddWorkout' component={AddWorkout}/>
        </Stack.Navigator>
    )
}
const TabGroup = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerTitleAlign: 'center'
        }}>
            <Tab.Screen name="Workouts" component={Workouts} />
            <Tab.Screen name='WorkoutGroup' component={WorkoutGroup}/>
            <Tab.Screen name="Settings" component={Settings} options={{}}/>
        </Tab.Navigator>
    )
}

export default TabGroup