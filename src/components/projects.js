import React from 'react';

function Projects() {
    return(
        <div className="card bg-secondary" id="projects">
            <h3 className="text-center mt-4 mb-4">Projects</h3>
            <div className="card-body bg-white w-75 align-self-center rounded">
                <h5 className="card-title">Tie-Tec-Toe Game</h5>
                <h6 className=" card-subtitle text-muted">Tools : ReactJS + HTML + CSS </h6>
                <p className="card-text"></p>
                <a href="http://github.com/mauliktrapas/tic-tec-toe/" className="btn btn-primary">Go To Code</a>
                <a href="http://mauliktrapas.github.io/tic-tec-toe/" className="btn btn-primary ml-3">Demo</a>
            </div>
            <div className="card-body bg-white w-75 align-self-center rounded mt-4">
                <h5 className="card-title">Todo List</h5>
                <h6 className=" card-subtitle text-muted">Tools : NodeJS + MongoDB + Jade </h6>
                <p className="card-text">Simple Todo List supports Insert, Delete, Update operation</p>
                <a href="http://github.com/mauliktrapas/TodoList/" className="btn btn-primary">Go To Code</a>
            </div>
            <div className="card-body bg-white w-75 align-self-center rounded mt-4">
                <h5 className="card-title">Online ​Hotel ​Reservation ​System</h5>
                <h6 className=" card-subtitle text-muted">Tools : PostgreSQL </h6>
                <p className="card-text">Database : ER ​ ​diagram, ​​Relational ​Schema ​diagram, ​Queries, ​Stored ​Procedure and ​​Trigger</p>
                <a href="http://goo.gl/ERG8Tu" className="btn btn-primary">Go To Code</a>
            </div>
            <div className="card-body bg-white w-75 align-self-center rounded mt-4">
                <h5 className="card-title">Dynamic ​Memory​ ​Allocator</h5>
                <h6 className=" card-subtitle text-muted">Tools : C </h6>
                <p className="card-text">I have used explicit ​free ​list ​to ​improve​ ​performance ​of ​dynamic​ ​memory allocator​(made with implicit free list) ​which ​can ​handle​ ​malloc, ​realloc ​and ​free requests</p>
                <a href="http://github.com/mauliktrapas/dynamic-memory-allocator" class="btn btn-primary">Go To code</a>
            </div>
            <div className="card-body bg-white w-75 align-self-center rounded mt-4">
                <h5 className="card-title">Tiny Shell</h5>
                <h6 className=" card-subtitle text-muted">Tools : C </h6>
                <p className="card-text">I have written code to handle bg, fg, exit, list jobs command and SIGCHLD, SIGINT, SIGSTP handler</p>
                <a href="https://github.com/mauliktrapas/shell-project" className="btn btn-primary">Go To code</a>
            </div>
            <div className="card-body bg-white w-75 align-self-center rounded mt-4">
                <h5 className="card-title">Calculator</h5>
                <h6 className=" card-subtitle text-muted">Tools : ReactJS + HTML + CSS </h6>
                <p className="card-text"></p>
                <a href="https://github.com/mauliktrapas/calculator/" className="btn btn-primary">Go To Code</a>
                <a href="https://mauliktrapas.github.io/calculator/" className="btn btn-primary ml-3">Demo</a>
            </div>

        </div>
    )
}

export default Projects;