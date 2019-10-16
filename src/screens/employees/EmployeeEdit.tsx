import React from 'react';
import { StyleSheet } from "react-native";
import {
    Card,
    CardSection,
    Button,
    ConfirmModal
} from "../../common";
import { connect } from 'react-redux';
import EmployeeForm from "./EmployeeForm";
import {
    employeeEdit,
    employeeUpdate,
    employeeDelete,
    toggle_modal } from "../../actions/employeeFormActions";
import _ from 'lodash';
import Communications from 'react-native-communications';

const EmployeeEdit = (props) => {
    const { employee, employeeUpdate, dispatch, modalVisible, toggleModal } = props;
    const { name, phone, shift, uid } = employee;
    _.each({name, phone, shift}, (value, prop) => {
        dispatch(employeeUpdate({prop, value}));
    });
    return <Card>
        <EmployeeForm employee={{...employee}}/>
        <CardSection>
            <Button
                customStyles={editButtonStyles}
                buttonText={'Save Changes'}
                handler={() => dispatch(employeeEdit(uid))}/>
        </CardSection>
        <CardSection>
            <Button
                buttonText={'Message'}
                handler={() => messageUser(phone, shift)}/>
        </CardSection>
        <CardSection>
            <Button
                customStyles={deleteButtonStyles}
                buttonText={'Delete'}
                handler={() => dispatch(toggle_modal())}/>
        </CardSection>
        <ConfirmModal
            visible={modalVisible}
            onAccept={() => dispatch(employeeDelete(uid))}
            onDecline={() => dispatch(toggle_modal())}
            text={`Are you sure you want to fire ${name}?`}
        />
    </Card>
};
const messageUser = (phone, shift) => {
    Communications.text(phone, `Your shift is on ${shift}`)
};
const editButtonStyles = StyleSheet.create({
    buttonStyles: {
        borderColor: 'green'
    },
    textStyles: {
        color: 'green'
    }
});
const deleteButtonStyles = StyleSheet.create({
    buttonStyles: {
        borderColor: 'red',
        backgroundColor: 'red'
    },
    textStyles: {
        color: 'white'
    }
});
const mapStateToProps = (state) => {
    const { modalVisible } = state.employee;
    return { modalVisible };
};
const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        employeeEdit,
        employeeUpdate,
        employeeDelete,
        toggle_modal
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeEdit);