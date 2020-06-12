import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import colors from "../constants/colors";
const NumberComponent = props =>{
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.accent,
        borderRadius:10,
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    number: {
        color:colors.accent,
        fontSize: 22
    }
})
export default NumberComponent;