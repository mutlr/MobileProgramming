import { useContext, useState } from "react"
import { View, FlatList, StyleSheet, Dimensions, Pressable } from "react-native"
import WorkoutsContext from "../context/workoutsContext"
import { Avatar, Text, useTheme } from "react-native-paper"
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
    },
    button: {
        display: "flex",
        flexDirection: 'row',
        paddingLeft: 8,
        paddingRight: 8,
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
    const [filter, setFilter] = useState('')
    const theme = useTheme()
    const { unit } = useContext(UnitContext)
    const { workouts, summary } = useContext(WorkoutsContext)
    return (
        <Wrapper>
            < FlatList
                ListHeaderComponent={
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Pressable onPress={() => setFilter('')}>
                            <Bubble style={{ marginRight: 10, backgroundColor: filter === '' ? theme.colors.primary : theme.colors.secondary }}>
                                <Text variant="labelLarge">All</Text>
                            </Bubble>
                        </Pressable>
                        <FlatList

                            keyExtractor={item => item.distance + item.type}
                            contentContainerStyle={{ gap: 10, display: 'flex', flexDirection: 'row' }}
                            horizontal={true}
                            data={summary}
                            renderItem={({ item }) => {
                                const COLOR = filter === item.type ? theme.colors.primary : theme.colors.secondary
                                const DISTANCE_VALUE = unit === 'km' ? item.distance : kilometerToMiles(item.distance)
                                return (
                                    <Pressable onPress={() => setFilter(item.type)}>
                                        <Bubble style={[styles.button, { backgroundColor: COLOR }]}>
                                            <Avatar.Icon icon={item.type.toLowerCase()} size={40} style={{ backgroundColor: COLOR }} color={'black'} />
                                            <Text variant="labelLarge">{item.distance}</Text>
                                        </Bubble>
                                    </Pressable>
                                )
                            }}
                        />
                    </View>
                }
                data={workouts.filter((item) => filter === '' || item.type === filter)}
                contentContainerStyle={{ gap: 16, paddingBottom: 20 }}
                extraData={filter}
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