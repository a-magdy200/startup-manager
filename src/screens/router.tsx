import React from 'react';
import LoginForm from "./login/LoginForm";
import EmployeesList from "./employees/EmployeesList";
import EmployeeCreate from "./employees/EmployeeCreate";
import { StyleSheet } from "react-native";
import { Router, Scene, Actions } from "react-native-router-flux";
import EmployeeEdit from "./employees/EmployeeEdit";
const RouterComponent = () => {
    return <Router sceneStyle={{
        backgroundColor: 'white'
    }}>
        <Scene key={'root'} hideNavBar={true}>
            <Scene key={'auth'}>
                <Scene
                    key={'login'}
                    title={'Welcome, Please Login.'}
                    component={LoginForm} initial/>
            </Scene>
            <Scene key={'main'}>
                <Scene
                    key={'employeesList'}
                    component={EmployeesList}
                    title={'Employees'}
                    rightTitle={'create'}
                    onRight={() => Actions.employeesCreate()}/>
                <Scene
                    key={'employeesCreate'}
                    component={EmployeeCreate}
                    title={'Create Employee'}/>
                <Scene
                    key={'employeeEdit'}
                    component={EmployeeEdit}
                    title={'Edit Employee'}/>
            </Scene>

        </Scene>
    </Router>
};
const styles = StyleSheet.create({});
export default RouterComponent;