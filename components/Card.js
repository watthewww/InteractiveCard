import { Image, Text, TouchableOpacity, StyleSheet, View } from 'react-native'
export default function Card({ title }) {
    const clickOn = () => console.log('You have clicked', title);
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/test.png')} />
            <Text>{title}</Text>
            <TouchableOpacity style={styles.button} onPress={clickOn}>
                <Text>Click here</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingBottom: 10,
    },
    img: {
        width: 200,
        height: 200,
    },
    button: {
        borderWidth: 1,
        borderColor: 'grey',
    }
}
)