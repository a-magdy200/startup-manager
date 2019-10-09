import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
interface HeaderProps {
    headerTitle: string;
}
const Header = ({headerTitle}: HeaderProps) => {
    const {container, text} = styles;
    return <View style={container}>
        <Text style={text}>{headerTitle}</Text>
    </View>
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eee",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25,
        paddingBottom: 10,
        shadowColor: "#000",
        shadowOffset: {height: 2, width: 0},
        shadowOpacity: 0.2,
        elevation: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});
export {Header};