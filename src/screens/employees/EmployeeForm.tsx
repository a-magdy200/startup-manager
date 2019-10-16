import {Picker, StyleSheet, Text, View} from "react-native";
import { CardSection, Input } from "../../common";
import React from "react";
import { employeeUpdate } from "../../actions/employeeFormActions";
import { connect } from 'react-redux';

const EmployeeForm = (props) => {
    const {name, shift, phone} = props.employee;
    const { employeeUpdate, dispatch } = props;
    const { pickerContainerStyle, pickerStyle, pickerItemStyle } = styles;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return <View>
        <CardSection>
            <Input
                label={'name'}
                placeholder={'Employee\'s Name'}
                value={name}
                onChangeText={ value => dispatch(employeeUpdate({prop: 'name', value}))} />
        </CardSection>
        <CardSection>
            <Input
                label={'phone'}
                placeholder={'555-555-555'}
                value={phone}
                onChangeText={ value => dispatch(employeeUpdate({prop: 'phone', value}))} />
        </CardSection>
        <CardSection>
            <View style={pickerContainerStyle}>
                <Text>Shift</Text>
                <Picker
                    style={pickerStyle}
                    selectedValue={shift}
                    itemStyle={pickerItemStyle}
                    onValueChange={ value => dispatch(employeeUpdate({prop: 'shift', value}))}>
                    {days.map( (day, i) => <Picker.Item  key={i} label={day} value={day.toLowerCase()}/> )}
                </Picker>
            </View>
        </CardSection>
    </View>
};
const styles = StyleSheet.create({
    pickerContainerStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    pickerStyle: {
        flex: 1
    },
    pickerItemStyle: {
    }
});
const mapStateToProps = ({employee}, ownProps) => {
    return {...ownProps, employee: {...employee}};
};
const mapDispatchToProps = (dispatch) => {
    return { employeeUpdate, dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);