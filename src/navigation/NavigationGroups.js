import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../components/Settings';
import Workouts from '../components/Workouts';
import Home from '../components/Home';
import AddWorkout from '../components/AddWorkout';
import { useTheme } from 'react-native-paper';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

const headerStyle = {
    borderBottomWidth: 2,
    borderColor: "#B2E6D4",
}
const WorkoutGroup = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerStyle,
        }}>
            <Stack.Screen name='Home' component={Home}
                options={{
                    title: 'Home',
                }}
            />
            <Stack.Screen name='AddWorkout' component={AddWorkout} options={{ title: 'Add a Workout' }} />
        </Stack.Navigator>
    )
}

const TabGroup = () => {
    const theme = useTheme()
    return (
        <Tab.Navigator initialRouteName='WorkoutGroup'
            screenOptions={{
                headerTitleAlign: 'center',
                tabBarActiveTintColor: theme.colors.secondary,
                headerStyle,
                tabBarStyle: {
                    borderTopWidth: 2,
                    borderColor: theme.colors.secondary
                }
            }}

        >
            <Tab.Screen name="Workouts" component={Workouts}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome6 name="dumbbell" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='WorkoutGroup'
                component={WorkoutGroup}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    ),
                    tabBarLabel: "Home"
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="cog" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabGroup