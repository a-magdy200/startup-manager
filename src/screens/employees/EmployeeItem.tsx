import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {CardSection} from "../../common";
import {Actions} from "react-native-router-flux";

const EmployeeItem = (props) => {
    const { employee } = props;
    const { name } = employee;
    const { textStyle } = styles;
    return <TouchableWithoutFeedback onPress={() => selectEmployee(employee)}>
                <View>
                    <CardSection>
                        <Text style={textStyle}>{name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
};
const selectEmployee = (employee) => {
    Actions.employeeEdit({employee});
};
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        paddingLeft: 15
    }
});
export default EmployeeItem;