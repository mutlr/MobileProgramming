import { useContext, useEffect } from "react"
import { View, FlatList, StyleSheet } from "react-native"
import WorkoutsContext from "../context/workoutsContext"
import { Text } from "react-native-paper"
import { formatDate, kilometerToMiles } from "../utils/utils"
import UnitContext from "../context/unitContext"
import Bubble from "./Bubble"
const styles = StyleSheet.create({
    text: {
        fontSize: 24
    },
    container: {
        paddingLeft: 8,
        paddingTop: 8,
        paddingBottom: 8,
        alignItems: 'flex-start', 
        borderRadius: 16,
    }
})

const types = {
    "Swim": "Swimming",
    "Run": "Running",
    "Ski": "Skiing",
}
const ItemHeader = ({ type, date}) => {
    return (
        <Text variant="displaySmall" style={styles.text}>{types[type]} {formatDate(date)}</Text>    
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
        <View style={{marginTop: 16}}>
            <FlatList
            contentContainerStyle={{ gap: 10}}
            horizontal={true}
                data={summary}
                renderItem={({ item }) => {
                    console.log(`Value ${item}`)
                    return (
                        <Bubble>
                            <Text>{item.type} {item.distance}</Text>
                        </Bubble>
                )}}
            />
            < FlatList
                data={workouts}
                contentContainerStyle={{ gap: 16, marginTop: 16}}
                renderItem={({ item }) => (
                    <Bubble style={styles.container}>
                        <ItemHeader type={item.type} date={item.date} />
                        <Text variant="bodyLarge">{unit === 'km' ? item.distance : kilometerToMiles(item.distance)} {unit} in {item.duration} minutes</Text>
                    </Bubble>
                )}

            />
        </View >
    )
}

export default Workouts