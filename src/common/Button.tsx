import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
interface ButtonProps {
    buttonText: string;
    handler: any;
    customStyles?: any
}
const Button = ({buttonText, handler, customStyles}: ButtonProps) => {
    const {buttonStyle, textStyle} = styles;
    const buttonStyles = customStyles ? {...buttonStyle, ...customStyles.buttonStyles} : buttonStyle;
    const textStyles = customStyles ? {...textStyle, ...customStyles.textStyles} : textStyle;
    return <TouchableOpacity style={buttonStyles} onPress={handler}>
        <Text style={textStyles}>{buttonText}</Text>
    </TouchableOpacity>
};
const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
});
export {Button};