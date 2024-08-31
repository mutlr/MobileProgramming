import { StyleSheet, View } from "react-native"
import { useTheme } from "react-native-paper"

const Bubble = ({ children, style }) => {
    const theme = useTheme()
    return (
        <View style={[styles.main, {backgroundColor: theme.colors.secondary}, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        minWidth: 80,
        minHeight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 80,
        flexGrow: 1,
    }
})
export default Bubble