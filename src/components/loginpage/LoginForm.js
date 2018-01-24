import React, { Component } from 'react';
import { Form, Segment, Grid } from 'semantic-ui-react';

export default class LoginForm extends Component {
  static defaultProps = {
    onSubmit: () => {}
  };

  state = {
    invalidCredentials: false
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: '100%' }}
        verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form inverted onSubmit={this._handleSubmit}>
            <Segment inverted style={{ borderRadius: 0, marginTop: '15px' }}>
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
              {this.state.invalidCredentials ? (
                <div className="invalid-credentials">
                  Invalid Username or Password
                </div>
              ) : null}
              <Form.Button color="teal" fluid size="large">
                Log In
              </Form.Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
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
        console.log(error);
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
