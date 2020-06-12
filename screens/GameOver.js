import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Card from "../components/Card";
const GameOver = props => {
    return (
        
        <Card style={styles.screen}>
            <Text style={styles.text}>The Game is Over!</Text>
            <Text style={styles.text}>Number of Rounds: {props.roundNumber}</Text>
            <Text style={styles.text}>Number was: {props.userNumber}</Text>
            <View style={styles.button}><Button title="New Game" onPress={props.onRestart}/></View>
        </Card>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50,
    },
    button: {
        padding: 10
    },
    text:{
        fontSize: 22
    }
})

export default GameOver;