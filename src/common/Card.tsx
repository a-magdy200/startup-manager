import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = ({children}) => {
    const {container} = styles;
    return <View style={container}>{children}</View>
};
const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginBottom: 0,
        borderWidth: 1,
        borderRadius: 2,
        shadowOffset: {height: 2, width: 0},
        shadowRadius: 2,
        shadowOpacity: 0.2,
        elevation: 2,
        borderBottomWidth: 0
    }
});
export {Card};