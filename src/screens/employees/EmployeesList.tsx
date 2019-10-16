import React from 'react';
import { View, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { getEmployees } from "../../actions/employeesListActions";
import _ from 'lodash';
import EmployeeItem from "./EmployeeItem";
import {Employee} from "../../models/Employee";
const EmployeesList = (props) => {
    const { employees } = props;
    return <FlatList
        data={employees}
        renderItem={({item}) => <EmployeeItem employee={item}/>}
        keyExtractor={(item: Employee) => item.uid}
    />
};
const mapStateToProps = ({employeesList}) => {
    const { employees } = employeesList;
    const employeesArray: Employee[] = _.map(employees, (val, uid) => {
        return {...val, uid};
    });
    return { employees: employeesArray };
};
const mapDispatchToProps = dispatch => {
    dispatch(getEmployees());
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);