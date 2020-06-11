import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput, Button} from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
const StartGameScreen = props => {
    return (
        <View sytle={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" color={colors.accent} onPress={() => {
                    }}/></View>
                    <View style={styles.button}><Button title="Confirm" color={colors.primary} onPress={() => {
                    }}/></View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {

    }

})

export default StartGameScreen;