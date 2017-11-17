import React, { Component } from 'react';
import { Form, Segment } from 'semantic-ui-react';

export default class CreateAccountForm extends Component {
  static defaultProps = {
    onSubmit: () => {}
  };

  render() {
    return (
      <Segment inverted>
        <Form inverted onSubmit={this._handleSubmit}>
          <Form.Group widths={2}>
            <Form.Input
              label="First name"
              placeholder="First Name"
              name="firstName"
            />
            <Form.Input
              label="Last Name"
              placeholder="Last Name"
              name="lastName"
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input label="Email" placeholder="Email" name="email" />
            <Form.Input
              label="Username"
              placeholder="Username"
              name="username"
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input
              type="password"
              label="Password"
              placeholder="Password"
              name="password"
            />
            <Form.Input
              type="password"
              label="Repeat Password"
              placeholder="Repeat Password"
              name="repeatPassword"
            />
          </Form.Group>
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Form.Button>Sign Up</Form.Button>
        </Form>
      </Segment>
    );
  }

  _handleSubmit = event => {
    event.preventDefault();
    console.log(event.target);
    const {
      firstName,
      lastName,
      email,
      username,
      password,
      repeatPassword
    } = event.target;
    this.props.onSubmit({
      firstName: (firstName.value || '').trim(),
      lastName: (lastName.value || '').trim(),
      email: email.value || '',
      username: username.value || '',
      password: password.value || '',
      repeatPassword: repeatPassword.value || ''
    });
  };
}
