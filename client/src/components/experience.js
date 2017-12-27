import React from 'react';

function Experience() {
    return(
        <div className="card experience bg-light" id="experience">
            <h3 className="align-self-center bg-white card-header">
                Experience
            </h3>
            <div className="card-body">
                <h5 className="card-title">Sprinklr (Backend Developer)</h5>
                <h6 className="card-subtitle text-muted">Summer Intern-2017 (2 month)</h6>
                <p className="card-text card-body">   I ​ ​have ​ ​developed ​ ​anomaly ​ ​detection ​ ​service. ​ ​It ​ ​detects
                    anomaly ​ ​in ​ ​number ​ ​of ​ ​messages ​ ​and ​ ​number ​ ​of ​ ​queries ​ ​per
                    trigger ​ ​on ​ ​inbound ​ ​messages ​ ​of ​ ​Sprinklr's ​ ​client ​ ​that ​ ​are
                    coming ​ ​from ​ ​different ​ ​social ​ ​media. ​ ​This ​ ​is ​ ​very ​ ​helpful ​ ​in
                    tuning ​ ​the ​ ​trigger ​ ​frequency ​ ​and ​ ​reduce ​ ​overhead ​ ​on
                    Sprinklr's ​ ​system ​ ​performance.
                    <span className="text-muted"> Technologies ​ ​: ​ ​Java, ​ ​Spring, ​ ​MongoDB, ​ ​ElasticSearch</span>
                </p>
            </div>
        </div>
        )

}

export default Experience;