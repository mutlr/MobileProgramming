import { Text, useTheme } from "react-native-paper"
import { FlatList, Pressable, StyleSheet, View } from "react-native"
import { WorkoutButton } from "./AddWorkout"

const workouts = ["Run", "Ski", "Swim"]
const styles = StyleSheet.create({
    workoutList: {
        display: "flex",
        width: "100",
        flexGrow: 1,
        gap: 10
    },
    workout: {
        backgroundColor: "red",
        height: 50,
        width: 70,
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 200,
        alignSelf: 'center',
        justifyContent: 'center'
    }
})
const Workout = (props) => {
    const onPressFunction = () => {
        props.navigation.navigate('AddWorkout', {type: props.title})
    }
    return (
        <View style={styles.workoutList}>
            <WorkoutButton type={props.title} onClick={onPressFunction}/>
        </View>
    )
}
export const WorkoutsList = ({ onClick }) => {
    const theme = useTheme()
    return (
        <FlatList 
            data={workouts}
            renderItem={({item}) => <WorkoutButton type={item} onClick={() => onClick(item)} style={[styles.workout, {backgroundColor: theme.colors.secondary}]}/>}
            horizontal={true}
            style={styles.workoutList}
            contentContainerStyle={{gap: 8}}
        />
    )
}
const Home = ({ navigation }) => {
    const onPressFunction = (title) => {
        navigation.navigate('AddWorkout', {type: title})
    }
    return (
        <WorkoutsList onClick={onPressFunction} />
    )
}

export default Home