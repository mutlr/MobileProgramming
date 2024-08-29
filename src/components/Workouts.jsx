import { useContext, useEffect } from "react"
import { View, FlatList, StyleSheet } from "react-native"
import WorkoutsContext from "../context/workoutsContext"
import { Text } from "react-native-paper"
import { formatDate } from "../utils/utils"

const styles = StyleSheet.create({
    text: {
        fontSize: 24
    }
})
const ItemHeader = () => {
    return (
        <View>

        </View>
    )
}
const Workouts = () => {
    const { workouts }= useContext( WorkoutsContext )
    useEffect(() => {
        console.info("Workouts: ", workouts)
    }, [])
    return (
        <View>
            <Text>Workouts</Text>
            <FlatList
            data={workouts}
            renderItem={({ item }) => (
            <View>
                <Text style={styles.text}>{item.type} {formatDate(item.date)}</Text>
                <Text>{item.distance} km in {item.duration} minutes</Text>
            </View>
            )}
            
            />
        </View>
    )
}

export default Workouts