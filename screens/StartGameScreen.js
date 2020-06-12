import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";
import NumberComponent from "../components/NumberComponent";

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }
    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be between 1 and 99', [{
                text: 'Okay',
                style: 'destructive',
                onPress: resetInputHandler
            }])
            return;
        }
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(chosenNumber)
        Keyboard.dismiss();
    }
    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = <Card style={styles.summaryContainer}><Text>You
            Selected</Text><NumberComponent>{selectedNumber}</NumberComponent><Button title="START GAME"
                                                                                      onPress={() => props.onStartGame(selectedNumber)}/></Card>;
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View sytle={styles.screen}>
                <View style={{alignItems: 'center'}}><Text style={styles.title}>Start a New Game</Text></View>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input value={enteredValue} onChangeText={numberInputHandler} style={styles.input} blurOnSubmit
                           autoCaptalize={false} keyboardType="number-pad" maxLength={2}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button onPress={resetInputHandler} title="Reset"
                                                            color={colors.accent}/></View>
                        <View style={styles.button}><Button onPress={confirmInputHandler} title="Confirm"
                                                            color={colors.primary}/></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
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
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }

})

export default StartGameScreen;