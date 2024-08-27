import { View, Text } from "react-native"
import { Button } from "react-native-paper";
import { WorkoutsList } from "./Home";
import { useState } from "react";

export const WorkoutButton = ({ type, onClick, style }) => {
    return (
        <View>
            <Button icon={type.toLowerCase()} onPress={onClick} style={style} >Button</Button>
        </View>
    )
}
const AddWorkout = () => {
    const [item, setItem] = useState(1)
    const onPress = (title) => {
        console.log(title)
    }
    return (
        <WorkoutsList onClick={onPress}/>
    )
}

export default AddWorkout