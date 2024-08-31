import { View, Text, Pressable, StyleSheet, FlatList } from "react-native"
import { Button, useTheme } from "react-native-paper";
import { workouts, WorkoutsList } from "./Home";
import { useState } from "react";
import WorkoutForm from "./WorkoutForm";
import Bubble from "./Bubble";

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
        <Button icon={type.toLowerCase()} onPress={onClick} style={style} textColor={theme.colors.textColor}>{type}</Button>
    )
}
const AddWorkout = (props) => {
    const theme = useTheme()
    const [type, setType] = useState(props.route.params.type)
    const onPressFunction = (title) => {
        setType(title)
    }
    return (
        <View>
            <FlatList 
            data={workouts}
            renderItem={({item}) => (
                <Bubble style={{backgroundColor: item === type ? theme.colors.primary : theme.colors.secondary}}>
                    <WorkoutButton 
                        type={item} 
                        onClick={() => onPressFunction(item)} 
                    />
                </Bubble>
        )}
            horizontal={true}
            style={[styles.workoutList]}
            contentContainerStyle={{gap: 8}}
            />
        <WorkoutForm type={type}/>
        </View>
    )
}

export default AddWorkout