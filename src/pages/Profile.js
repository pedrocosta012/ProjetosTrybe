import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Header.css';

export default class Profile extends React.Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <Link to="/profile/edit">Edit Profile</Link>
      </div>
    );
  }
}
