import { View, Text, StyleSheet } from "react-native"
import { useState, useEffect, useContext } from "react";
import { RadioButton, useTheme } from 'react-native-paper';
import UnitContext from "../context/unitContext";
const styles = StyleSheet.create({
    text: {
        fontSize: 36,
    },
    container: {
        display: 'flex',
        gap: 10
    },
    radio: {

    }
})
const Settings = () => {
    const { unit, changeUnit } = useContext(UnitContext)
    const [checked, setChecked] = useState(unit);
    const theme = useTheme()
    const changeValue = async () => {
        const new_value = checked === 'km' ? 'miles' : 'km'
        setChecked(new_value)
        await changeUnit(new_value)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Units</Text>
            <Text>Kilometers</Text>
            <RadioButton
                value="km"
                status={checked === 'km' ? 'checked' : 'unchecked'}
                onPress={changeValue}
                uncheckedColor='black'
                color={theme.colors.secondary}
            />
            <Text>Miles</Text>
            <RadioButton
                
                value="miles"
                status={checked === 'miles' ? 'checked' : 'unchecked'}
                onPress={changeValue}
                uncheckedColor='black'
                color={theme.colors.secondary}
            />
        </View>
    )
}

export default Settings