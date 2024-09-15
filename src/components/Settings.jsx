import { Text, StyleSheet } from "react-native"
import { useState, useContext } from "react";
import { RadioButton, useTheme } from 'react-native-paper';
import UnitContext from "../context/unitContext";
import Bubble from "../components/Bubble"
import Wrapper from "./Wrapper";
const styles = StyleSheet.create({
    text: {
        fontSize: 36,
    },
    container: {
        display: 'flex',
        gap: 10,
    },
    radio: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 8,
        paddingLeft: 8
    }
})
const CustomRadioButton = ({ text, value }) => {
    const theme = useTheme()
    return (
        <Bubble style={styles.radio}>
            <RadioButton value={value}
                color={theme.colors.primary}
                uncheckedColor="black"
            />
            <Text>{text}</Text>
        </Bubble>
    )
}
const Settings = () => {
    const { unit, changeUnit } = useContext(UnitContext)
    const [value, setValue] = useState(unit);
    const changeValue = async (value) => {
        const new_value = value === 'km' ? 'km' : 'miles'
        setValue(new_value)
        await changeUnit(new_value)
    }
    return (
        <Wrapper>
            <Text style={styles.text}>Units</Text>
            <RadioButton.Group onValueChange={(newValue) => changeValue(newValue)} value={value}>
                <CustomRadioButton text="Kilometers" value="km" />
                <CustomRadioButton text="Miles" value="miles" />
            </RadioButton.Group>
        </Wrapper>
    )
}

export default Settings