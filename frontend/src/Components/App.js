import React from 'react';
import './App.css';

import PlayerList from './Player/PlayerList';
import PlayerDetail from './Player/PlayerDetail';
import PlayerForm from './Player/PlayerForm';
import Menu from './Menu';
import { getPlayers } from '../api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };

    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  componentDidMount() {
    getPlayers().then((res) => {
      this.setState({
        players: res.players,
      });
    });
  }

  updateCurrentPlayer(player) {
    this.setState({
      currentPlayer: player,
    });
  }

  getCurrentPlayerContent() {
    if (this.state.currentPlayer) {
      return <PlayerDetail player={this.state.currentPlayer} />;
    }

    return 'SELECT PLAYER';
  }

  getForm() {
    if (this.state.currentPlayer) {
      return <PlayerForm player={this.state.currentPlayer} />;
    }

    return <PlayerForm />;
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Menu />
        </div>
        <div className="row">
          <div className="col s3">
            <PlayerList
              players={this.state.players}
              updateCurrentPlayer={this.updateCurrentPlayer}
            />
          </div>
          <div className="col s9">{this.getCurrentPlayerContent()}</div>
        </div>
        <div className="row">
          <div className="col s12">{this.getForm()}</div>
        </div>
      </div>
    );
  }
}

export default App;
