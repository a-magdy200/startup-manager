import React, { Component } from 'react';
import { Text, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, userLogin } from '../../actions/authActions';
import {Button, Card, CardSection, Input,  Spinner} from "../../common";
import {User} from "../../models/User";
import {Actions} from "react-native-router-flux";
interface Props {
    emailChanged?: any;
    passwordChanged?: any;
    userLogin?: any;
    dispatch?: any;
    email?: string;
    password?: string;
    error?: false | string;
    loading?: boolean;
    signup?: boolean;
    user?: User | null;
}
class LoginForm extends Component {
    props: Props;
    constructor(props) {
        super(props);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }
    componentWillMount(): void {
        if (this.props.user) {
            Actions.main({type: 'reset'});
        }
    }

    onEmailChange(email: string): void {
        const { dispatch, emailChanged } = this.props;
        dispatch(emailChanged(email));
    }
    onPasswordChange(password: string): void {
        const { dispatch, passwordChanged } = this.props;
        dispatch(passwordChanged(password));
    }
    onLoginButtonClick(): void {
        const { dispatch, userLogin, email, password } = this.props;
        dispatch(userLogin({ email, password }));
    }
    render() {
        const { errorStyle, successStyle } = styles;
        const { loading, signup, user, error } = this.props;
        return <Card>
            <CardSection>
                <Input
                    label={'Email'}
                    secure={false}
                    autoComplete={'off'}
                    placeholder={'example@domain.com'}
                    value={this.props.email}
                    onChangeText={this.onEmailChange}/>
            </CardSection>
            <CardSection>
                <Input
                    label={'password'}
                    secure={true}
                    placeholder={'********'}
                    value={this.props.password}
                    onChangeText={this.onPasswordChange}/>
            </CardSection>
            <CardSection>
                {loading ? <Spinner/> : <Button
                    buttonText={'Login'}
                    handler={ () => this.onLoginButtonClick()}/>}
            </CardSection>
            { error ? <CardSection>
                <Text style={errorStyle}>{error}</Text>
            </CardSection> : null }
            { signup ? <CardSection>
                <Text style={successStyle}>Account Created</Text>
            </CardSection> : null }
            { user ? <CardSection>
                <Text style={successStyle}>
                    Logged in!!!
                </Text>
            </CardSection> : null }
        </Card>
    }
}
const styles = StyleSheet.create({
    errorStyle: {
        color: '#f00'
    },
    successStyle: {
        color: '#0f0'
    }
});
const mapDispatchToProps = (dispatch): Props => {
    return {
        emailChanged,
        passwordChanged,
        userLogin,
        dispatch
    };
};
const mapStateToProps = ({auth}): Props => {
    const {email, password, loading, error, signup, user} = auth;
    return {
        email,
        password,
        loading,
        error,
        signup,
        user
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);