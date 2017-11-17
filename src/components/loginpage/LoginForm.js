import React, { Component } from 'react';
import { Form, Segment } from 'semantic-ui-react';

export default class LoginForm extends Component {
  static defaultProps = {
    onSubmit: () => {}
  };

  state = {
    invalidCredentials: false
  };

  render() {
    return (
      <Segment inverted>
        <Form inverted onSubmit={this._handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Username"
              placeholder="Username"
              name="username"
            />
            <Form.Input
              type="password"
              label="Password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          {this.state.invalidCredentials ? (
            <div className="invalid-credentials">
              Invalid Username or Password
            </div>
          ) : null}
          <Form.Button>Log In</Form.Button>
        </Form>
      </Segment>
    );
  }

  _handleSubmit = event => {
    event.preventDefault();
    const { username, password } = event.target;
    this.props
      .onSubmit({
        username: (username.value || '').trim(),
        password: password.value || ''
      })
      .catch(error => {
        console.log(error.message);
        if (
          error.message.startsWith('AuthenticationService.ERROR_UNEXPECTED')
        ) {
          this.setState({
            invalidCredentials: true
          });
        }
      });
  };
}
