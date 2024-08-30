import { useContext, useEffect } from "react"
import { View, FlatList, StyleSheet } from "react-native"
import WorkoutsContext from "../context/workoutsContext"
import { Text } from "react-native-paper"
import { formatDate, kilometerToMiles, MILE_VALUE } from "../utils/utils"
import UnitContext from "../context/unitContext"

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
    const { unit } = useContext(UnitContext)
    const { workouts, summary } = useContext(WorkoutsContext)
    useEffect(() => {
        console.info("Workouts: ", workouts)
        console.log("Summary: ", summary)
    }, [])
    return (
        <View>
            <Text>Workouts!</Text>
            <FlatList
                data={summary}
                renderItem={({ item, value }) => {
                    console.log(`Value ${item[0]}`)
                    return (
                        <Text> hi</Text>)
                }}
            />
            < FlatList
                data={workouts}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.text}>{item.type} {formatDate(item.date)}</Text>
                        <Text>{unit === 'km' ? item.distance : kilometerToMiles(item.distance)} {unit} in {item.duration} minutes</Text>
                    </View>
                )}

            />
        </View >
    )
}

export default Workouts