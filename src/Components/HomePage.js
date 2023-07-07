import React, { useEffect } from 'react'
import { useState } from "react";
import axios from 'axios';


function HomePage() {

  const [ResData, setResData] = useState([]);

  const [categaries, setcategaries] = useState("");




  const APIcall = () => {

    axios.get(`https://fakestoreapi.com/products/${categaries}`)
      .then(function (response) {
        // handle success
        // console.log(response.data);
        setResData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });


  }


  useEffect(() => {
    APIcall();
   
  });

  return (
    <>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">SHPPING STORE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item dropdown mr-5">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Select Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" onClick={()=>{setcategaries("category/electronics")}}>electronics</a></li>
            <li><a className="dropdown-item" onClick={()=>{setcategaries("category/jewelery")}}>jewelery</a></li>
            <li><a className="dropdown-item" onClick={()=>{setcategaries("category/men's clothing")}}>men's clothing</a></li>
            <li><a className="dropdown-item" onClick={()=>{setcategaries("women's clothing")}}>women's clothing</a></li>
          
          </ul>
        </li>

            </ul>
            <form className="d-flex">
              
              <img src="https://cdn-icons-png.flaticon.com/512/180/180650.png" width={50} height={50} alt="" />
            </form>
          </div>
        </div>
      </nav>


      {/* main content  */}
      <div className="container mt-5">
        <div className="row">
          {Array.isArray(ResData) && ResData.map((i, index) => {
            return (
              <>
                <div className="col mb-4 mr-5" >

                  <div className="card  " style={{ width: "18rem" }} key={index}>
                    <img src={i.image} alt="..." />
                    <div className="card-body">
                      <h5>$ {i.price}</h5>
                      <p className="card-text">{i.category}</p>
                      <p>{i.description}</p>
                    </div>
                  </div>
                </div>

              </>
            );
          })}


        </div>
      </div>


    </>
  )
}

export default HomePage
