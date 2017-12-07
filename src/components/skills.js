import React from 'react';

function Skills() {
    return(
        <div className="container skill mb-5" id="Skills">
           <h3 className="mt-4 text-center">Skills</h3>
            <div className="row">
                <div className="col-sm-6">
                    <div className="progress mt-4 progress-height">
                      <div className="cpp progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">C++</div>
                    </div>
                    <div className="progress mt-4 progress-height">
                        <div className="c progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">C</div>
                    </div>
                    <div className="progress mt-4 progress-height">
                        <div className="java progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">Java</div>
                    </div>
                    <div className="progress mt-4 progress-height">
                        <div className="data-structure progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Data Structure</div>
                    </div>
                    <div className="progress mt-4 progress-height">
                       <div className="algorithm progress-bar" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Algorithms</div>
                    </div>
                    <div className="progress mt-4 progress-height">
                       <div className="reactJS progress-bar" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">ReactJS</div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="progress mt-4 progress-height">
                        <div className="nodeJS progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">NodeJS/ExpressJS</div>
                    </div>
                    <div className="progress mt-4 progress-height">
                        <div className="html progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">HTML</div>
                    </div>
                    <div className="progress mt-4 progress-height">
                        <div className="bootstrap progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">Bootstrap</div>
                    </div>
                    <div className="progress mt-4 progress-height">
                        <div className="postgreSQL progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">PostgresSQL</div>
                    </div>
                    <div className="progress mt-4 progress-height">
                        <div className="mongoDB progress-bar" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">MongoDB</div>
                    </div>
                    <div className="progress mt-4 progress-height">
                        <div className="git progress-bar" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Git</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;