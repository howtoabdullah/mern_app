import React from 'react';
import { deletePlayer } from '../../api';

class PlayerDetail extends React.Component {
  onDelete() {
    deletePlayer(this.props.player._id)
      .then((res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-image" alt="Image">
              <img src="messi.jpg" />
              <span className="card-title">
                {this.props.player.firstName} {this.props.player.lastName}
              </span>
            </div>
            <div className="card-content">
              <p>Phone: {this.props.player.phone}</p>
              <p>Email: {this.props.player.email}</p>
              <p>Team: {this.props.player.team}</p>
              <p>Strength: {this.props.player.strength}</p>
              <p>Speed: {this.props.player.speed}</p>
              <p>Ability: {this.props.player.ability}</p>
              <p>Techniques: {this.props.player.techniques}</p>
              <p>Tactical: {this.props.player.tactical}</p>
            </div>
            <div className="card-action">
              <button
                class="waves-effect waves-light btn"
                type="button"
                onClick={this.onDelete.bind(this)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerDetail;
