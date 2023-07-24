import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import '../styles/Header.css';

export default class Album extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      loadedSongs: [],
      favSongs: [],
    };
  }

  componentDidMount() {
    this.requestSongs();
    this.initialFavSongs();
  }

  initialFavSongs = async () => {
    const favSongs = await getFavoriteSongs();
    if (!favSongs) return;
    const listedFav = favSongs.map((song) => song.trackId);
    this.setState({ favSongs: listedFav });
  };

  appendNewFavSong = (songId) => {
    const { favSongs } = this.state;
    this.setState({
      favSongs: [...favSongs, songId],
    });
  };

  removeFavSong = (songId) => {
    const { favSongs } = this.state;
    favSongs.pop(favSongs.indexOf(songId));
    this.setState({ favSongs });
  };

  startLoading = () => {
    this.setState({
      loading: true,
    });
  }

  stopLoading = () => {
    this.setState({
      loading: false,
    });
  };

  requestSongs = () => {
    const { match: { params: { id } } } = this.props;
    getMusics(id).then((res) => this.setState({ loadedSongs: res }, () => {
      this.setState({ loading: false });
    }));
  };

  renderSongsList = () => {
    const { favSongs, loadedSongs } = this.state;
    return loadedSongs.map((res, index) => {
      if (index === 0) {
        return (
          <div>
            <h2 data-testid="artist-name">{res.artistName}</h2>
            <h3 data-testid="album-name">{res.collectionName}</h3>
          </div>
        );
      }
      const checked = favSongs.includes(res.trackId);
      return (
        <MusicCard
          key={ res.trackName }
          artistId={ res.artistId }
          trackName={ res.trackName }
          previewUrl={ res.previewUrl }
          trackId={ res.trackId }
          favSongs={ favSongs }
          songData={ res }
          checked={ checked }
          removeFavSong={ this.removeFavSong }
          appendNewFavSong={ this.appendNewFavSong }
          startLoading={ this.startLoading }
          stopLoading={ this.stopLoading }
        />
      );
    });
  };

  renderLoadingScreen = () => <div><p>Carregando...</p></div>;

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        { loading ? this.renderLoadingScreen() : this.renderSongsList() }
      </div>
    );
  }
}

Album.propTypes = (({
  match: PropTypes.object,
}).isRequired);
