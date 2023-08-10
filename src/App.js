import React,{ useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';


  const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=fc7e339033b586ad5389ba774d9f37c8";
  const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=fc7e339033b586ad5389ba774d9f37c8&query";
function App() {

  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])


  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=fc7e339033b586ad5389ba774d9f37c8&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }

  return (
    <>
    <Navbar bg="black" expand="lg" variant="dark" style={{ opacity: "0.7" }}>
    <Container fluid>
      <Navbar.Brand href="/home">
        <div className='tag-name'>RFilmz</div></Navbar.Brand>
      <Navbar.Brand href=""><div className='tag-nav-container'>
        <div className='tag-nav'>Home</div></div><div className='tag-nav-container'>
          <div className='tag-nav'>Movies</div></div><div className='tag-nav-container'>
            <div className='tag-nav'>
              <select>
                  <option>Action</option>
                  <option>Horror</option>
                  <option>Drama</option>
                  <option>Mstry</option>
                  <option>Roman</option>
                  <option>Thrller</option>
                  <option>Comdy</option>
              </select>  
            </div></div><div className='tag-nav-container'>
              <div className='tag-nav'>Country</div></div></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-3"
          style={{maxHeight:'100px'}}
          navbarScroll></Nav>

          <Form className='d-flex' onSubmit={searchMovie}> 
            <FormControl type="search" placeholder='Cari Film' className='me-2' aria-label="search" name="query" value={query} onChange={changeHandler}></FormControl>
            <Button variant="secondary" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    <div>
      {movies.length > 0 ?(<div className='container'> 
      <div className='grid'>
        {movies.map((movieReq)=>
        <MovieBox key={movieReq.id} {...movieReq}/>)}
        </div>
      </div>
        ):(
          <h2>MOVIE NOT FOUND 404</h2>
        )}

    </div>

    <div style={{ width:"100%", height:"50px", backgroundColor:"rgb(12, 2, 36)", opacity:0.8, paddingTop:"0.6px"}}>
      <p style={{ textAlign:"center", color:"white", marginTop:"20px" }}>Rfilmz v.1</p>
    </div>
    </>
  );
}

export default App;
