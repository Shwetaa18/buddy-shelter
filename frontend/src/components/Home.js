import Products from './Products'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Navbar from "./Navbar"
function Home() {
  return (
    <div>
      <Navbar />
      <Carousel  >
        <Carousel.Item>
          <img
            className="d-block w-100"
            width="500" height="700"
            src="/assets/image3.JPG"
            alt="First slide"
          />
          <Carousel.Caption className='text-dark'>
            <h1>BUDDY SHELTER</h1>
            <p><h3>WAY TO HOME FOR STEET DOGS,WITH GOOD PRARENTS</h3></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="/assets/image1.JPG"
            alt="Second slide"
            width="500" height="700"
          />

          <Carousel.Caption className='text-dark'>
            <h1>BUDDY SHELTER</h1>
            <p><h3>WAY TO HOME FOR STEET DOGS,WITH GOOD PRARENTS</h3></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/image2.JPG"
            alt="Third slide"
            width="500" height="700"
          />

          <Carousel.Caption className='text-dark'>
            <h1>BUDDY SHELTER</h1>
            <p><h3>WAY TO HOME FOR STEET DOGS,WITH GOOD PRARENTS</h3></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Home

  // <div className='card'>
    //   {/* <div className="card text-white border-0">
    //     <img src="/assets/animal.jpg" className="card-img" alt="Background"
    //       height="600px" />
    //     <div className="card-img-overlay d-flex flex-column justify-content-center">
    //       <div className='container'>
    //         <h5 className="card-title display-3 fw-bolder mb-0 text-dark">Animal Rescue</h5>
    //         <p className="card-text fs-2 text-dark">JSPM(Rajarshi Shahu College of Engineering).</p>

    //       </div>
    //     </div>
    //   </div> */}
    //   {/* <Products /> */}

    // </div>