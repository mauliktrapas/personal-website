import React from 'react';

function About() {
    return (
       <div className="bg-secondary">
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-4">
                    <img src={require('../maulik.png')} className="align-self-center rounded" />
                </div>
                <div className="col-sm-8 card align-self-center bg-light">
                    <div className="card-body">
                        <div className="card-text">
                            I am 21 year old and live in Gandhinagar, India. I am in final year of Computer Science in Dhirubhai
                            Ambani Institute of Information and Communication Technology. I like web development and Competitive Programming. I am open to learn new technologies.
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default About;