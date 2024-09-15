import { useContext, useEffect } from "react"
import { View, FlatList, StyleSheet, Dimensions } from "react-native"
import WorkoutsContext from "../context/workoutsContext"
import { Avatar, Chip, Text, useTheme } from "react-native-paper"
import { formatDate, kilometerToMiles } from "../utils/utils"
import UnitContext from "../context/unitContext"
import Bubble from "./Bubble"
import Wrapper from "./Wrapper"
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

const ItemHeader = ({ type, date }) => {
    const theme = useTheme()
    return (
        <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center' }}>
            <Avatar.Icon icon={type.toLowerCase()} size={40} style={{ backgroundColor: theme.colors.secondary }} color={'black'} />
            <Text variant="displaySmall" style={styles.text}>{formatDate(date)}</Text>
        </View>
    )
}
const Workouts = () => {
    const { unit } = useContext(UnitContext)
    const { workouts, summary } = useContext(WorkoutsContext)
    return (
        <Wrapper>
            < FlatList
                ListHeaderComponent={
                    <FlatList
                        keyExtractor={item => item.distance + item.type}
                        contentContainerStyle={{ gap: 10 }}
                        horizontal={true}
                        data={summary}
                        renderItem={({ item }) => (
                            <Bubble >
                                <Text variant="labelLarge">{item.type} {item.distance}</Text>
                            </Bubble>
                        )}
                    />
                }
                data={workouts}
                contentContainerStyle={{ gap: 16, paddingBottom: 20 }}
                renderItem={({ item }) => (
                    <Bubble style={styles.container}>
                        <ItemHeader type={item.type} date={item.date} />
                        <Text style={{ paddingLeft: 8 }} variant="bodyLarge">{unit === 'km' ? item.distance : kilometerToMiles(item.distance)} {unit} in {item.duration} minutes</Text>
                    </Bubble>
                )}
                keyExtractor={(item) => item.id}
            />
        </Wrapper >
    )
}

export default Workouts