import { View, Text, Pressable, StyleSheet, FlatList } from "react-native"
import { Button, useTheme } from "react-native-paper";
import { workouts, WorkoutsList } from "./Home";
import { useState } from "react";
import WorkoutForm from "./WorkoutForm";

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: 80,
        justifyContent: "center",
        alignContent: 'center'
    }
})
export const WorkoutButton = ({ type, onClick, style }) => {
    const theme = useTheme()
    return (
        <Button icon={type.toLowerCase()} onPress={onClick} style={[styles.button, { backgroundColor: theme.colors.secondary }, style]} textColor={theme.colors.primary}>{type}</Button>
    )
}
const AddWorkout = (props) => {
    const theme = useTheme()
    const [type, setType] = useState(props.route.params.type)
    const onPressFunction = (title) => {
        setType(title)
        console.log("Type is: ", type)
    }
    return (
        <View>
            <FlatList 
            data={workouts}
            renderItem={({item}) => <WorkoutButton type={item} onClick={() => onPressFunction(item)} style={{backgroundColor: item === type ? "white" : theme.colors.secondary}}/>}
            horizontal={true}
            style={[styles.workoutList]}
            contentContainerStyle={{gap: 8}}
            />
        <WorkoutForm type={type}/>
        </View>
    )
}

export default AddWorkout