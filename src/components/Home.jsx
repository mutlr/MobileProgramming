import { Text } from "react-native-paper"
import { Pressable, View } from "react-native"

const Home = ({ navigation }) => {
    const onPressFunction = () => {
        navigation.navigate('AddWorkout')
    }
    return (
        <View>
            <Pressable onPress={onPressFunction}>
                <Text>I'm pressable!</Text>
            </Pressable>
        </View>
    )
}

export default Home