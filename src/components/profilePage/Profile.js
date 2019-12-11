import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Profile extends Component {
    render() {
        const { auth, profile, events, userId } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        const userEvents = events.filter(event => event.authorId === userId);
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="profile-grid">
                    <Cell col={12}>
                        <img 
                        src="https://biggerpockets.s3.amazonaws.com/assets/avatar/no_avatar.svg"
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Profile Name</h1>
                            <hr/>
                            <p>Created Events - {userEvents.length}</p>
                            <p>Participated in {profile.eventsParticipating.length} Events</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        events: state.firestore.ordered.projects,
        userId: state.firebase.auth.uid
    }
}

export default connect(mapStateToProps)(Profile);