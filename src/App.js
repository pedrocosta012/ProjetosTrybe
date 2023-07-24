import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      disabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  turnOnOffLoginButton = () => {
    const { name, disabled } = this.state;
    const MIN_LENGTH_NAME = 3;
    if (name.length >= MIN_LENGTH_NAME && disabled) {
      this.setState({ disabled: false });
    } else if (name.length < MIN_LENGTH_NAME && !disabled) {
      this.setState({ disabled: true });
    }
  }

  render() {
    const { name, disabled } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={
              (props) => (<Login
                { ...props }
                name={ name }
                disabled={ disabled }
                turnOnOffLoginButton={ this.turnOnOffLoginButton }
                handleChange={ this.handleChange }
              />)
            }
          />
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
