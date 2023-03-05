import React, {useState } from 'react'
import axios from 'axios'



const Navbar = () => {
    const hover={
            height: '200px',
            width: '200px',
            cursor: 'pointer',
    }

    const [text, settext] = useState();
    const [movie, setmovie] = useState([]);

  const getmovie = (e) => {
            e.preventDefault();
            axios.get(`https://www.omdbapi.com/?s=${text}&apikey=4cb50529`).then((response) => {
                console.log(response)
                setmovie(response.data.Search)
            })
        }


    return (
        <>
            <nav className="navbar navbar-light bg-primary">
                <div className="container-fluid">
                    <h3>Movies Search</h3>
                    <form className="d-flex" onSubmit={ getmovie }>
                        <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" value={ text } onChange={ (e) => settext(e.target.value) } />
                        <button className="btn btn-outline-light me-5" type="submit">Search</button>
                    </form>
                </div>
            </nav>


            <div className="container mt-3">
                <div className="row">
                    {
                        movie.map((ele) => {
                            return (
                                <>
                                    <div className="col-3" style={ { padding: "2rem" } }>
                                        <div className="card" style={ { width: "14rem",height:"18rem" } } onMouseEnter={hover}>
                                            <img src={ ele.Poster } className="card-img-top" alt="..." />
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title">{ ele.Year }</h4>
                                            <p className="card-text">{ ele.Title }</p>

                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Navbar;
