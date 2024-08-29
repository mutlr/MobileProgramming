import { Text, useTheme } from "react-native-paper"
import { FlatList, Pressable, StyleSheet, View } from "react-native"
import { WorkoutButton } from "./AddWorkout"
import { useContext } from "react"

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
        <View>
            <FlatList 
                data={workouts}
                renderItem={({item}) => <WorkoutButton type={item} onClick={() => onPressFunction(item)} style={[styles.workout, {backgroundColor: theme.colors.secondary}]}/>}
                horizontal={true}
                style={styles.workoutList}
                contentContainerStyle={{gap: 8}}
            />
        </View>
    )
}

export default Home