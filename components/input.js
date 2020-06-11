import React from 'react';
import {TextInput, Stylesheet} from 'react-native';

const Input = props => {
    return <TextInput style={{...styles.input, ...props.style}}/>
}

const styles = Stylesheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 
    }
})

export default Input;