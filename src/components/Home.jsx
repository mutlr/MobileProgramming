import { Text, useTheme } from "react-native-paper"
import { FlatList, Pressable, StyleSheet, View } from "react-native"
import { WorkoutButton } from "./AddWorkout"
import { useContext } from "react"
import Bubble from "./Bubble"
import Wrapper from "./Wrapper"
import WorkoutForm from "./WorkoutForm"
import { useState } from "react"


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
    const [type, setType] = useState(workouts[0])
    const onPressFunction = (title) => {
        setType(title)
    }
    return (
        <Wrapper>
            <FlatList
                data={workouts}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Bubble style={{ backgroundColor: item === type ? theme.colors.primary : theme.colors.secondary }}>
                        <WorkoutButton
                            type={item}
                            onClick={() => onPressFunction(item)}
                        />
                    </Bubble>

                )}
                horizontal={true}
                style={styles.workoutList}
                contentContainerStyle={{ gap: 8 }}
            />
            <WorkoutForm type={type} navigation={navigation} />
        </Wrapper>
    )
}

export default Home