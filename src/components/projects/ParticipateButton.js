import React, { Component } from 'react';
import { participateInEvent } from '../../store/actions/authActions';
import { connect } from 'react-redux';

class ParticipateButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      this.handleClick = this.handleClick.bind(this);

    }
  
    handleClick() {
        this.props.participateInEvent(this.props.eventId);
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick} className="waves-effect waves-light btn participate-button">
          {this.state.isToggleOn ? 'Participate' : 'Participating'}
        </button>
      );
    }
  }

  
const mapDispatchToProps = (dispatch) => {
    return {
        participateInEvent: (eventId) => dispatch(participateInEvent(eventId))
    }
}

export default connect(null, mapDispatchToProps)(ParticipateButton);