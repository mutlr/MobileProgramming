import { View, Text, StyleSheet } from "react-native"
import { useState, useEffect, useContext } from "react";
import { RadioButton } from 'react-native-paper';
import UnitContext from "../context/unitContext";
const textStyle = StyleSheet.create({
    fontSize: 36
})
const Settings = () => {
    const { unit, changeUnit } = useContext(UnitContext)
    const [checked, setChecked] = useState(unit);
    const changeValue = async () => {
        const new_value = checked === 'km' ? 'miles' : 'km'
        setChecked(new_value)
        await changeUnit(new_value)
    }
    return (
        <View>
            <Text style={textStyle}>Units</Text>
            <Text>Kilometers</Text>
            <RadioButton
                value="km"
                status={checked === 'km' ? 'checked' : 'unchecked'}
                onPress={changeValue}
            />
            <Text>Miles</Text>
            <RadioButton

                value="miles"
                status={checked === 'miles' ? 'checked' : 'unchecked'}
                onPress={changeValue}
            />
        </View>
    )
}

export default Settings