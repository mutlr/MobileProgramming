import { useTheme, Button } from "react-native-paper"
import { FlatList, StyleSheet, } from "react-native"
import Bubble from "./Bubble"
import Wrapper from "./Wrapper"
import WorkoutForm from "./WorkoutForm"
import { useState } from "react"


const workouts = ["Run", "Ski", "Swim"]

const styles = StyleSheet.create({
    workoutList: {
        display: "flex",
        width: "100",
        flexGrow: 1,
        gap: 10
    },
    button: {
        height: 50,
        width: 80,
        justifyContent: "center",
        alignContent: 'center'
    }
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
                        <Button icon={item.toLowerCase()} onPress={() => onPressFunction(item)} style={styles.button} textColor={theme.colors.textColor}>{item}</Button>
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