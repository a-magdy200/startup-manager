import React from 'react';
import { Button, Card, CardSection } from "../../common";
import { employeeCreate } from '../../actions/employeeFormActions';
import { connect } from 'react-redux';
import EmployeeForm from "./EmployeeForm";
const EmployeeCreate = (props) => {
    const { employeeCreate, dispatch } = props;
    return <Card>
        <EmployeeForm/>
        <CardSection>
            <Button buttonText={'Create'} handler={() => dispatch(employeeCreate())}/>
        </CardSection>
    </Card>
};
const mapDispatchToProps = (dispatch) => {
    return { dispatch, employeeCreate };
};
export default connect(null, mapDispatchToProps)(EmployeeCreate);