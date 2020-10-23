import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import * as action from '../../store/auth';

import './Auth.scss';

interface Props {
    onAuth: (email: string, password: string) => void;
}

interface State {
    controls: any;
}

class Auth extends Component<Props, State> {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5
                },
                valid: false,
                touched: false
            }
        }
    }

    inputChangeHandler = (event, controlName) => {
        const updatedControl = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }

        this.setState({controls: updatedControl});
    }

    checkValidity(value: string, rules: any) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    submitHandler = (event) =>  {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
    }

    render() {

        const formElementArray = [];
        for (let key in this.state.controls) {
            formElementArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        const form = formElementArray.map(element => (
            <Input
                key={element.key}
                elementType={element.config.elementType}
                elementConfig={element.config.elementConfig}
                value={element.config.value}
                invalid={element.config.invalid}
                shouldValidate={element.config.validation}
                touched={element.config.touched}
                changed={(e) => this.inputChangeHandler(e, element.id)}
            />
        ))

        return (
            <div className="Auth">
                <form>
                    {form}
                    <Button btnType="Success" onClick={this.submitHandler}>Submit</Button>
                </form>
            </div>
        )
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        onAuth: (email, password) => dispatch(action.auth(email, password))
    }
}

export default connect(null, mapStateToDispatch)(Auth);