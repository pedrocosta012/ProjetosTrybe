import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

export default class MusicCard extends React.Component {
  constructor(props) {
    super(props);

    const { checked } = this.props;

    this.state = {
      checked,
    };
  }

  componentDidUpdate() {
    const { songData } = this.props;
    this.verifyIfFavoriteSongs(songData);
  }

  verifyIfFavoriteSongs = async (songData) => {
    const allFavorites = await getFavoriteSongs();
    const favOfThisArtist = allFavorites
      .filter(({ trackId }) => trackId === songData.trackId);
    if (favOfThisArtist.includes(songData)) {
      this.setState({ checked: true });
    }
  };

  handleCheck = async () => {
    const { checked } = this.state;
    const {
      songData,
      appendNewFavSong,
      removeFavSong,
      startLoading,
      stopLoading,
    } = this.props;
    this.setState({ checked: !checked });
    if (!checked) {
      startLoading();
      await addSong(songData);
      appendNewFavSong(songData.trackId);
      stopLoading();
    } else {
      startLoading();
      await removeSong(songData);
      removeFavSong(songData.trackId);
      stopLoading();
    }
  }

  render() {
    const { checked, trackId, trackName, previewUrl } = this.props;
    return (
      <>
        <p>{trackName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor="audio-component">
          <input
            id="audio-component"
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            checked={ checked }
            onChange={ this.handleCheck }
          />
          Favorita
        </label>
      </>
    );
  }
}

MusicCard.propTypes = (({
  songData: PropTypes.object,
  trackId: PropTypes.string,
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
}).isRequired);
