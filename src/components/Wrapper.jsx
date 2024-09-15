import { View, StyleSheet } from "react-native"
const Wrapper = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        paddingLeft: 8,
        paddingRight: 8,
        marginBottom: 8,
    }
})
export default Wrapper