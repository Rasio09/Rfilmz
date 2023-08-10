import { Modal,show } from 'react-bootstrap';
import { useState } from 'react';
import React from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

const API_IMG="https://image.tmdb.org/t/p/w500";
const MovieBox =({title, poster_path, vote_average, release_date, overview})=>{

    const [show, setShow]=useState(false);
    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);

    return(
        <div className='card text-center bg-secondary mb-3 '>
            <div className='card-body'>
                <img className='card-img-top' src={API_IMG+poster_path}></img>
            <div className='card-body view'>
                <button type='button' className='btn btn-dark viewmore' onClick={handleShow}>View More</button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img className='card-img-top gamview' style={{width:'14rem'}} src={API_IMG+poster_path}></img>
                        <h3>{title}</h3>
                        <h4>Rate : <span>{vote_average}</span></h4>
                        <h5>Release Date : {release_date}</h5>
                        <br></br>
                        <h6>Overview : </h6>
                        <p>{overview}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            </div>
        </div>
    )
}

export default MovieBox;