import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { StaticImage } from "gatsby-plugin-image";
// import image1 from "../images/mt2.jpeg";
// import image2 from "../images/mt7.jpeg";
// import image3 from "../images/mt6.jpg";
import image4 from "../images/swamiji.jpeg";
import Navbar from "./Navbar";

function Header() {
    // let [isHovering, setIsHovering]= useState(false);
  return (
    <div className="container-fluid h-100 w-100 border border-danger">
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <marquee> Hello how are you </marquee>
                </nav>

                <div className="row p-1 text-center bg-light borde h-15">
                <div className="col-1 border">
                    <img src={image4} className="d-block h-100 w-100" alt="..." />
                </div>
                <div className="col border">
                    <h3 className="mb-3">KARNATAKA SHIKSHNA SEVA SAMITHI</h3>
                    <h1 className="mb-3">KSSS P.U SCIENCE AND COMMERCE COLLEGE</h1>
                </div>

                <div className="col-1 border">
                    <img src={image4} className="d-block h-100 w-100" alt="..." />
                </div>

                {/* <a className="btn btn-primary" href="" role="button">Call to action</a> */}
                </div>
            </header>
            <Navbar />

                {/* phots gallery section */}

            <div id="carouselExampleIndicators" class="container h-50 carousel slide overflow-hidden pt-3" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://media.istockphoto.com/photos/group-of-students-joking-and-getting-to-know-each-other-picture-id987130494?b=1&k=20&m=987130494&s=170667a&w=0&h=8rof2cEWg7UZhnNUuwRKAmFWL6xPG2J15I5JP5-sWag=" class="d-block w-100 h-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://media.istockphoto.com/photos/distance-learning-from-home-on-video-conference-call-picture-id1226796079?b=1&k=20&m=1226796079&s=170667a&w=0&h=9BGrMPDB5LdEmiEHmnrIG9VQGA5FaNY9Mc8AayRT3qM=" class="d-block w-100 h-auto" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://media.istockphoto.com/photos/distance-learning-from-home-on-video-conference-call-picture-id1226796079?b=1&k=20&m=1226796079&s=170667a&w=0&h=9BGrMPDB5LdEmiEHmnrIG9VQGA5FaNY9Mc8AayRT3qM=" class="d-block w-100 h-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


{/* content & introduction  */}

            <div className=" container border border-danger card mt-3 ">
                 <div className="card-body">
                    <h5 className="card-title">WELCOME TO K.S.S.S P.U COLLEGE</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    <p className="card-text">
                    K.S.S.S.P.U. College draws its inspiration from the person and life and teaching of Sri Sri Vishwesh Teerth Swamiji,Universal Master and Model of education. It is situated about 5kms from Hubli on the Pune-Bangalore Highway(NH-4) at Budarshinghi. It is one of the finest centers of learning.The college is recognized by Pre-University Education Board Karnataka.The college offers the students all the advantages of a modren education system without distraction of city life.The campus is located in the pleasant and cool climatic conditions in the outskirts of the town in harmony with serene surrounding of green.This college is a boon to all those who are interested to give value based education to their children.The learner centered education with the concept of all round development of the individual student is the foremost philosophy of this college.The campus is optly named as "Govardan Campus".</p>
                    {/* <a href="#" className="card-link">Card link</a> */}
                    {/* <a href="#" className="card-link">Another link</a> */}
                </div>
            </div>

{/* with card image photo */}

        <div className=" container border border-danger card mt-3 mb-3 " >
            <div className="row g-0">
                <div className="col-md-3 border border-danger">
                     <img src={image4} className=" rounded-start" alt="..." style={{width:'300px',height:'300px'}}/>
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title">THE DRIVING FORCE</h5>
                        <p className="card-text" style={{fontSize:'1.5rem'}}>
                            We believe that every child is uniquely created with divine energy which requires a suitable medium of expression. It is our duty to channelize this hidden energy to the world at large through right education, right values and right action. KSSS PU College imbibes these ideals for purposeful education across caste, creed and nationality in the true spirit of Sri Swamiji's vision.</p>
                    </div>
                </div>
            </div>
        </div>


        {/* vision page */}
        <div className=" container card-group">
            <div className="card">
                {/* <img src="https://media.istockphoto.com/photos/silhouette-of-businessman-holding-target-board-on-the-top-of-mountain-picture-id1283030328?b=1&k=20&m=1283030328&s=170667a&w=0&h=1kBZ-lbo_Y10Q56oj2kAoOnjQ-duvyRUXDxSLKX7A2A=" className="card-img-top" alt="..."/> */}
                <div className="card-body">
                <h5 className="card-title text-center">Objectives</h5>
                <p className="card-text">
We aim to provide quality education with highest academic standards .Our objective is to create an environment that will ensure that our student will develop well rounded personalities and grow into successful human beings and not just remain successful students.</p>
                </div>
                {/* <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
                </div> */}
            </div>

            <div className="card">
                {/* <img src="https://media.istockphoto.com/photos/company-key-success-concept-hand-putting-wooden-cubes-blocks-which-picture-id1296843077?b=1&k=20&m=1296843077&s=170667a&w=0&h=E7v91wH7_ljDPCClBRWhsXcAdaGcn77198IINChKeBY=" className="card-img-top" alt="..."/> */}
                <div className="card-body">
                <h5 className="card-title text-center">Vision</h5>
                <p className="card-text">
To maintain the higher standard of discipline and imparting right value. To install the spirit of dedication to the young minds to be an asset to the nation. To mould the student/young minds with best education and higher disciplinary Standards to meet the global competency. To be the most efficient acceptable and excel in the field of education</p>
                </div>
                {/* <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
                </div> */}
            </div>
    </div>

     
    </div>
  );
}
export default Header;
