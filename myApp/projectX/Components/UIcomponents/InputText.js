import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const InputText = ({ value = '', onChange, placeholder = '' }) => {

    const [error, setError] = useState(false);
    const handleTextChange = (text) => {
        ValidateText(text)
    }
    const ValidateText = (text) => {
        console.log(text)
        if (text.length === 0) {
            setError(true);
        }
        else {
            onChange(text)
            setError(false);
        }
    }
    return (
        <View>
            <TextInput
                defaultValue={value}
                placeholder={placeholder}
                maxLength={30}
                onChangeText={text => handleTextChange(text)}
                style={styles.inputBox}
            />
            {error && <Text>Can't be Empty!</Text>}
        </View>
    )
};

export default InputText;

const styles = StyleSheet.create({
    inputBox: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#0095ff',
        padding: 10,
        height: 35,
        borderRadius: 15,
        minWidth: 200,
    }
})