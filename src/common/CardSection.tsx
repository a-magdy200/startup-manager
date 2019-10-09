import React from 'react';
import {View, StyleSheet} from 'react-native';

const CardSection = ({children}) => {
    const {container} = styles;
    return <View style={container}>{children}</View>
};
const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderRadius: 2,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'flex-start'
    }
});
export {CardSection};