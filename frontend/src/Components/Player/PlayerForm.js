import React from 'react';
import { createPlayer, updatePlayer } from '../../api';

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props.player.firstName,
      lastName: props.player.lastName,
      phone: props.player.phone,
      email: props.player.email,
      team: props.player.team,
      speed: props.player.speed,
      strength: props.player.strength,
      ability: props.player.ability,
      techniques: props.player.techniques,
      tactical: props.player.tactical,
    };

    this.getHeader = this.getHeader.bind(this);
  }

  onSubmitPlayer(event) {
    // event.preventDefault();

    const data = {
      player: true,
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      phone: this.refs.phone.value,
      email: this.refs.email.value,
      team: this.refs.team.value,
      speed: this.refs.speed.value,
      strength: this.refs.strength.value,
      ability: this.refs.ability.value,
      techniques: this.refs.techniques.value,
      tactical: this.refs.tactical.value,
    };

    if (this.state.player) {
      updatePlayer(this.props.player._id, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          if (err) {
            console.log(err);
          }
        });
    }

    createPlayer(data).catch((err) => {
      if (err) {
        console.log(err);
      }
    });
  }

  getHeader() {
    if (this.state.player) {
      return 'Update Player';
    }

    return 'Add a New Player';
  }

  render() {
    return (
      <div className="row">
        <h1 className="center">{this.getHeader()}</h1>
        <form className="col s12" onSubmit={this.onSubmitPlayer.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="First Name" id="firstName" ref="firstName" type="text" />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input placeholder="Last Name" id="lastName" ref="lastName" type="text" />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Email" id="email" ref="email" type="email" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Phone" id="phone" ref="phone" type="text" />
              <label htmlFor="phone">Phone</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Team" id="team" ref="team" type="text" />
              <label htmlFor="team">Team</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Speed" id="speed" ref="speed" type="text" />
              <label htmlFor="speed">Speed</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Strength" id="strength" ref="strength" type="text" />
              <label htmlFor="strength">Strength</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Techniques" id="techniques" ref="techniques" type="text" />
              <label htmlFor="techniques">Techniques</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Ability" id="ability" ref="ability" type="text" />
              <label htmlFor="ability">Ability</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Tactical" id="tactical" ref="tactical" type="text" />
              <label htmlFor="tactical">Tactical</label>
            </div>
          </div>
          <button class="waves-effect waves-light btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
