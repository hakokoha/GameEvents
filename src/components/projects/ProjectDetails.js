import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { participateInEvent } from '../../store/actions/authActions';

const ProjectDetails = (props) => {
    const { project, auth, profile, participateInEvent } = props;
    if(!auth.uid) return <Redirect to='/signin' />
    const currentEventId = props.history.location.pathname.toString().split('/')[2];
    const isParticipating = profile.eventsParticipating.includes(currentEventId);

    const handleParticipate = (e) => {
        e.preventDefault();
        participateInEvent(currentEventId);
    }

    if(project) {
        return (
            <div className="container section project-details">
                <div className="project-details-card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                        <button className="waves-effect waves-light btn participate-button" onClick={handleParticipate}>{isParticipating ? 'Participating' : 'Participate'}</button>
                    </div>
                    <div className="project-details-bottom">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate().toString()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        participateInEvent: (eventId) => dispatch(participateInEvent(eventId))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails)
