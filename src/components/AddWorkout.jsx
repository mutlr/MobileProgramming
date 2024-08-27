import { View, Text, Pressable, StyleSheet } from "react-native"
import { Button, useTheme } from "react-native-paper";
import { WorkoutsList } from "./Home";
import { useState } from "react";

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
        <Button icon={type.toLowerCase()} onPress={onClick} style={[styles.button, { backgroundColor: theme.colors.secondary }]} textColor={theme.colors.primary}>{type}</Button>
    )
}
const AddWorkout = () => {
    const [item, setItem] = useState(1)
    const onPress = (title) => {
        console.log(title)
    }
    return (
        <WorkoutsList onClick={onPress} />
    )
}

export default AddWorkout