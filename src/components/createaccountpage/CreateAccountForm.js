import React, { Component } from 'react';
import { Form, Segment, Grid } from 'semantic-ui-react';

export default class CreateAccountForm extends Component {
  static defaultProps = {
    onSubmit: () => {}
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: '100%' }}
        verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form inverted onSubmit={this._handleSubmit}>
            <Segment
              stacked
              inverted
              style={{ borderRadius: 0, marginTop: '15px' }}>
              <Form.Input
                required
                label="First name"
                placeholder="First Name"
                name="firstName"
              />
              <Form.Input
                required
                label="Last Name"
                placeholder="Last Name"
                name="lastName"
              />
              <Form.Input
                required
                type="email"
                label="E-mail Address"
                placeholder="E-mail Address"
                name="email"
              />
              <Form.Input
                required
                label="Username"
                placeholder="Username"
                name="username"
              />
              <Form.Input
                required
                type="password"
                label="Password"
                placeholder="Password"
                name="password"
              />
              <Form.Input
                required
                type="password"
                label="Repeat Password"
                placeholder="Repeat Password"
                name="repeatPassword"
              />
              <Form.Button color="teal" fluid size="large">
                Sign Up
              </Form.Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }

  _handleSubmit = event => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      email,
      username,
      password,
      repeatPassword
    } = event.target;
    this.props.onSubmit({
      first_name: (firstName.value || '').trim(),
      last_name: (lastName.value || '').trim(),
      email: email.value || '',
      username: username.value || '',
      password: password.value || '',
      repeatPassword: repeatPassword.value || ''
    });
  };
}
