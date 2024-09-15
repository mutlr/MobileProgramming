import { View, Pressable, StyleSheet } from "react-native"
import { useContext, useState, useEffect } from "react";
import { useController, useForm } from "react-hook-form";
import { Button, TextInput, useTheme } from "react-native-paper";
import { yupResolver } from '@hookform/resolvers/yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as yup from "yup";
import WorkoutsContext from "../context/workoutsContext";
import UnitContext from "../context/unitContext";
const schema = yup.object({
    distance: yup.number('Must be a number')
        .positive("Must be a positive number")
        .integer("Must be a number")
        .required("Value is required").typeError("Value must be a positive number"),
    duration: yup.number('Must be a number')
        .positive("Must be a positive number")
        .integer("Must be a number")
        .required("Value is required").typeError("Value must be a positive number"),
    sport: yup.string(),
    date: yup.date().required(),

}).required();
const styles = StyleSheet.create({
    input: {
        color: 'red',
        marginTop: 8,
    }
})
const Input = ({ name, control, icon, label, editable, value }) => {
    const theme = useTheme()
    const { field, fieldState: { error, isTouched, } } = useController({
        control,
        defaultValue: '',
        name,
        value
    })
    const errorValid = !error && !isTouched
    return (
        <TextInput
            value={value || field.value}
            onChangeText={field.onChange}
            style={[styles.input, { backgroundColor: theme.colors.secondary, }]}
            mode="outlined"
            label={errorValid ? label : error.message}
            name={name}
            error={!errorValid}
            right={icon && <TextInput.Icon icon={icon} />}
            editable={editable}
            activeOutlineColor="black"
        />
    )
}
const WorkoutForm = ({ type }) => {
    const { addToList } = useContext(WorkoutsContext)
    const { unit } = useContext(UnitContext)
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    const theme = useTheme()
    const { control, handleSubmit, error, setValue } = useForm({
        defaultValues: {
            duration: '',
            distance: '',
            sport: type,
            date: date,
        },
        resolver: yupResolver(schema),
        fieldState: {}
    });
    useEffect(() => {
        setValue('sport', type);
    }, [type, setValue]);

    useEffect(() => {
        setValue('date', date);
    }, [date, setValue]);
    const onSubmit = data => {
        if (error) {
            print("Error!", error)
            return
        }
        addToList(data);
    }
    const onChange = (event, selectedDate) => {
        setShow(false);
        setDate(selectedDate);
    };
    return (
        <View>
            <Input label="Sport" name="sport" control={control} icon="run-fast" editable={false} />
            <Input label={`Distance (${unit === 'km' ? 'KM' : "Miles"})`} name="distance" control={control} icon="map-marker-distance" />
            <Input label={"Duration (min)"} name="duration" control={control} icon="camera-timer" />
            {show && <DateTimePicker
                value={date}
                is24Hour={true}
                onChange={onChange}
                mode="date"
                show={show}
            />}
            <Pressable onPress={() => setShow(true)}>
                <Input label="Date" name="date" control={control} icon="calendar" editable={false} value={date.toLocaleDateString()} />
            </Pressable>
            <Button marginTop={20} buttonColor={theme.colors.secondary} textColor="black" mode='contained' onPress={handleSubmit(onSubmit)} disabled={error ? true : false}>Submit</Button>
        </View>
    )
}

export default WorkoutForm