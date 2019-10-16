import React from "react";
import {Modal, Text, View, StyleSheet} from "react-native";
import { CardSection } from "./CardSection";
import { Button } from "./Button";
import { Card } from "./Card";

const ConfirmModal = (props) => {
    const { visible, text, onAccept, onDecline } = props;
    const { containerStyle, textStyle } = styles;
    return <Modal
        visible={visible}
        transparent
        animationType={'slide'}
        onRequestClose={ () => {} }
    >
        <View style={containerStyle}>
            <Card>
                <CardSection>
                    <Text style={ textStyle }>{text}</Text>
                </CardSection>
                <CardSection>
                    <Button
                        customStyles={yesButtonStyle}
                        buttonText={'Yes'}
                        handler={onAccept}/>
                </CardSection>
                <CardSection>
                    <Button
                        buttonText={'No'}
                        handler={onDecline}/>
                </CardSection>
            </Card>
        </View>
    </Modal>;
};
const yesButtonStyle = StyleSheet.create({
    buttonStyles: {
        backgroundColor: 'red',
        borderColor: 'red',
    },
    textStyles: {
        color: 'white'
    }
});
const styles = StyleSheet.create({
   containerStyle: {
       flex: 1,
       backgroundColor: 'rgba(0, 0, 0, 0.75)',
       padding: 25,
       alignItems: 'center',
       justifyContent: 'center'
   },
    textStyle: {
        color: 'white',
        fontSize: 20,
        marginBottom: 20
    }
});
export { ConfirmModal };