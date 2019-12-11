import React from 'react';
import moment from 'moment';

const ProjectSummary = ({project}) => {
    console.log(project);
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content white-text hoverable">
                <span>{project.title}</span>
                <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="white-text">{moment(project.createdAt.toDate().toString()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary;