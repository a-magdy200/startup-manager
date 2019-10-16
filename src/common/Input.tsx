import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
interface InputProps {
    label: string;
    secure?: boolean;
    autoComplete?: 'off' | 'username' | 'password' | 'email' | 'name' | 'tel' | 'street-address' | 'postal-code' | 'cc-number' | 'cc-csc' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year';
    placeholder: string;
    value: string;
    onChangeText: any;
    autoCorrect?: boolean;
}
const Input = ({label, secure = false, autoCorrect = false, autoComplete = 'off', placeholder, value, onChangeText}: InputProps) => {
    const {inputStyle, containerStyle, labelStyle} = styles;
    return <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
            placeholder={placeholder}
            autoCorrect={autoCorrect}
            autoCompleteType={autoComplete}
            secureTextEntry={secure}
            value={value}
            onChangeText={onChangeText}
            style={inputStyle}

        />
    </View>
};
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        paddingRight: 10,
        flex: 2,
    },
    inputStyle: {
        flex: 5,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#0005',
    }
});
export {Input};