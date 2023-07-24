import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import '../styles/Header.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      disabled: true,
      loading: false,
      singer: '',
      searchResult: [],
    };
  }

  componentDidUpdate = () => {
    this.turnOnOffSearchButton();
  };

  turnOnOffSearchButton = () => {
    const { search, disabled } = this.state;
    if (search.length > 1 && disabled) {
      this.setState({ disabled: false });
    } else if (search.length <= 1 && !disabled) {
      this.setState({ disabled: true });
    }
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ search: value });
  };

  renderFoundAlbum = () => {
    const { singer, searchResult } = this.state;
    return (
      <div>
        <p>{`Resultado de álbuns de: ${singer}`}</p>
        {searchResult.map((album) => (
          <Link
            to={ `/album/${album.collectionId}` }
            data-testid={ `link-to-album-${album.collectionId}` }
            key={ album.collectionId }
          >
            <img
              src={ album.artworkUrl100 }
              alt={ `Album ${album.collectionName}` }
            />
            <p>{album.collectionName}</p>
            <p>{album.artistName}</p>
          </Link>
        ))}
      </div>
    );
  };

  noAlbumFound = () => (
    <div>
      <p>Nenhum álbum foi encontrado</p>
    </div>
  );

  handleSearch = () => {
    const { search } = this.state;
    this.setState({ loading: true, search: '', singer: search });
    searchAlbumsAPI(search).then((res) => this.setState({ searchResult: res }));
    this.setState({ loading: false });
  };

  renderLoading = () => (
    <div>
      <p>Carregando...</p>
    </div>
  );

  render() {
    const { search, disabled, loading, searchResult } = this.state;
    const validation = searchResult.length > 0;
    return (
      <div data-testid="page-search">
        <Header />
        {
          !loading
          && (
            <form>
              <input
                data-testid="search-artist-input"
                type="text"
                value={ search }
                onChange={ this.handleChange }
              />
              <button
                data-testid="search-artist-button"
                type="button"
                disabled={ disabled }
                onClick={ this.handleSearch }
              >
                Pesquisar
              </button>
            </form>
          )
        }
        { loading && this.renderLoading() }
        { (!loading && validation) ? this.renderFoundAlbum() : this.noAlbumFound() }
      </div>
    );
  }
}
