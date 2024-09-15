import { useContext, useEffect, useState } from "react"
import { View, FlatList, StyleSheet, Dimensions, Pressable } from "react-native"
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
    const [filter, setFilter] = useState('')
    const theme = useTheme()
    const { unit } = useContext(UnitContext)
    const { workouts, summary } = useContext(WorkoutsContext)
    return (
        <Wrapper>
            < FlatList
                ListHeaderComponent={
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Bubble style={{ marginRight: 10 }}>
                            <Pressable onPress={() => setFilter('')}>
                                <Text variant="labelLarge">All</Text>
                            </Pressable>
                        </Bubble>
                        <FlatList

                            keyExtractor={item => item.distance + item.type}
                            contentContainerStyle={{ gap: 10, display: 'flex', flexDirection: 'row' }}
                            horizontal={true}
                            data={summary}
                            renderItem={({ item }) => (
                                <Bubble >
                                    <Pressable style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => setFilter(item.type)}>
                                        <Avatar.Icon icon={item.type.toLowerCase()} size={40} style={{ backgroundColor: theme.colors.secondary }} color={'black'} />
                                        <Text variant="labelLarge">{item.distance}</Text>
                                    </Pressable>
                                </Bubble>
                            )}
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