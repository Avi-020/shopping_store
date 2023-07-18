import React, { useEffect } from 'react'
import { useState } from "react";
import axios from 'axios';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from '../Context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



function HomePage() {
  const { cartItems } = useContext(CartContext);



  const [ResData, setResData] = useState([]);

  const [categaries, setcategaries] = useState("");

  const { addItem } = useContext(CartContext);

  const handleUpdateItem = (itemId, image, price,title,des) => {
    toast("iteam was added in cart");
        const newItem = {
      id: itemId,
      image,
      price,
      quantity: 1,
      title,
      des
    };
    addItem(newItem);
  };



  const APIcall = () => {

    axios.get(`https://fakestoreapi.com/products/${categaries}`)
      .then(function (response) {
        // handle success
        // console.log("res data",response.data);
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
    <ToastContainer />
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
            <form className="d-flex" style={{position:"relative"}}>
            <Link to="/Cart"> 
              <ShoppingCartIcon sx={{ color: "white"}}  fontSize="large" />
              <div style={{position:"absolute",top:"0",right:"0", backgroundColor:"white",borderRadius:"50%", height:"20px",width:"20px",textAlign:"center", marginTop:"auto",marginBottom:"auto",color:"black"}} ><b>{cartItems.length}</b></div>
            
             </Link>
            </form>
          </div>
        </div>
      </nav>


      {/* main content  */}
      <div className="container mt-5">
        <div className="row">
          {Array.isArray(ResData) && ResData.map((i) => {
            return (
                <div className="col mb-4 mr-5" key={i.id}  >
                  <div className="card  " style={{width:"18rem"}} >
                    <img src={i.image} alt="..." height={250} width={250} style={{textAlign:"center",marginLeft:"auto",marginRight:"auto"}}/>
                    <div className="card-body">
                      <h5>$ {i.price}</h5>
                      <p className="card-text">{i.title.slice(0 , 20)}</p>
                      <p>{i.description.slice(0 , 88)}</p>
                      <button type="button" className="btn btn-primary mx-2" >Buy Now</button>
                      <button type="button" className="btn btn-primary" onClick={() => handleUpdateItem(i.id, i.image, i.price,i.title,i.description)}>Add To Cart</button>

                    </div>
                  </div>
                </div>
            );
          })}


        </div>
      </div>


    </>
  )
}

export default HomePage
