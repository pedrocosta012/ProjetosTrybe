import PropTypes from 'prop-types';
import React from 'react';
import defaultLogo from '../logos/logo-white_mode.png';
import '../styles/Login.css';
import { createUser } from '../services/userAPI';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  componentDidUpdate = () => {
    const { turnOnOffLoginButton } = this.props;
    turnOnOffLoginButton();
  }

  actionSequence = (param) => {
    this.setState({ loading: true }, async () => {
      await createUser(param);
      this.setState({ loading: false }, () => {
        const { history: { push } } = this.props;
        push('/search');
      });
    });
  }

  renderLoginPage() {
    const { name, disabled, handleChange } = this.props;
    const user = { name };
    return (
      <div data-testid="page-login" id="page-login">
        <img className="login-logo" src={ defaultLogo } alt="logo" />
        <div className="form-container">
          <form>
            <input
              data-testid="login-name-input"
              id="login-name-input"
              type="text"
              name="name"
              placeholder="Nome"
              value={ name }
              onChange={ handleChange }
            />
            <button
              data-testid="login-submit-button"
              type="button"
              disabled={ disabled }
              to="/search"
              onClick={ () => this.actionSequence(user) }
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  renderLoadingPage() {
    return (
      <div className="loading-page">
        <p>Carregando...</p>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (loading ? this.renderLoadingPage() : this.renderLoginPage());
  }
}

Login.propTypes = (({
  name: PropTypes.string,
  disabled: PropTypes.bool,
  history: PropTypes.func,
  loading: PropTypes.bool,
  turnOnOffLoginButton: PropTypes.func,
  handleChange: PropTypes.func,
}).isRequired);
