import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import defaultLogo from '../logos/logo-white_mode.png';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: {},
    };
  }

  componentDidMount() {
    this.defUser();
  }

  defUser = async () => {
    getUser().then(async (res) => this.setState({ loading: false, user: res }));
  };

  renderHeader() {
    const { user: { name, image } } = this.state;
    return (
      <header data-testid="header-component">
        <img className="img-logo" src={ defaultLogo } alt="TrybeTunes logo" />
        <div className="user-info">
          <img src={ image } alt={ `Foto de ${name}` } />
          <span data-testid="header-user-name">{name}</span>
        </div>
        <div>
          <Link data-testid="link-to-search" to="/search">Pesquisa</Link>
          <Link data-testid="link-to-favorites" to="/favorites">Favoritas</Link>
          <Link data-testid="link-to-profile" to="/profile">Perfil</Link>
        </div>
      </header>
    );
  }

  renderLoading() {
    return (
      <div className="loading-page">
        <p>Carregando...</p>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (loading ? this.renderLoading() : this.renderHeader());
  }
}
