import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { loginUser } from '../../store/actions/auth';

class LoginContainer extends Component {
  handleSubmit= async (value) => {
    await this.props.loginUser(value);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      return this.props.history.push('/');
    }
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  loginUser: values => dispatch(loginUser(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
