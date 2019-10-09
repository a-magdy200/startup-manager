import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
interface SpinnerProps {
    size: 'small' | number | 'large';
}
const Spinner = ({size}: SpinnerProps) => {
    const {spinnerStyle} = styles;
    return <View style={spinnerStyle}>
        <ActivityIndicator size={size || 'large'}/>
    </View>
};
const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export {Spinner};