import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { setUserEmail } from '../redux/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      const { email, password } = this.state;
      const MIN_PASSWORD_LENGTH = 5;
      const reason1 = email.includes('@');
      const reason2 = email.includes('.com');
      const reason3 = password.length > MIN_PASSWORD_LENGTH;
      const allReasons = reason1 && reason2 && reason3;
      const disabled = !allReasons;
      this.setState({ disabled });
    });
  };

  render() {
    const { email, password, disabled } = this.state;
    const { updateUser } = this.props;
    return (
      <div>
        <h2>Login</h2>
        <input
          data-testid="email-input"
          name="email"
          type="text"
          value={ email }
          onChange={ this.handleChange }
          placeholder="Email"
        />
        <input
          data-testid="password-input"
          name="password"
          type="password"
          value={ password }
          onChange={ this.handleChange }
          placeholder="Senha"
        />
        <Link to="/carteira">
          <button type="button" disabled={ disabled } onClick={ () => updateUser(email) }>
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  updateUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateUser: (userEmail) => dispatch(setUserEmail(userEmail)),
});

export default connect(null, mapDispatchToProps)(Login);
