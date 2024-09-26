import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../components/Settings';
import Workouts from '../components/Workouts';
import Home from '../components/Home';
import { useTheme } from 'react-native-paper';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Text, Button, View } from 'react-native-paper';
import Bubble from '../components/Bubble';

const Tab = createBottomTabNavigator();

const headerStyle = {
    borderBottomWidth: 2,
    borderColor: "#B2E6D4",
}

const TabGroup = () => {
    const theme = useTheme()
    return (
        <Tab.Navigator initialRouteName='Home'
            screenOptions={{
                headerTitleAlign: 'center',
                tabBarActiveTintColor: theme.colors.secondary,
                headerStyle,
                tabBarStyle: {
                    borderTopWidth: 2,
                    borderColor: theme.colors.secondary,
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8,

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
                name='Home'
                component={Home}
                options={{
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