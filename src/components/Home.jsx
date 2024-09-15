import { Text, useTheme } from "react-native-paper"
import { FlatList, Pressable, StyleSheet, View } from "react-native"
import { WorkoutButton } from "./AddWorkout"
import { useContext } from "react"
import Bubble from "./Bubble"
import Wrapper from "./Wrapper"

export const workouts = ["Run", "Ski", "Swim"]
const styles = StyleSheet.create({
    workoutList: {
        display: "flex",
        width: "100",
        flexGrow: 1,
        gap: 10
    },
})

const Home = ({ navigation }) => {
    const theme = useTheme()
    const onPressFunction = (title) => {
        navigation.navigate('AddWorkout', {type: title})
    }
    return (
        <Wrapper>
            <FlatList 
                data={workouts}
                renderItem={({item}) => (
                    <Bubble>
                        <WorkoutButton type={item} onClick={() => onPressFunction(item)}/>
                    </Bubble>
            )}
                horizontal={true}
                style={styles.workoutList}
                contentContainerStyle={{gap: 8}}
            />
        </Wrapper>
    )
}

export default Home