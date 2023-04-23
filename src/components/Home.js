import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Products from './Products'

function Home() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          
          src="/assets/animal.jpg"
          alt="First slide"
          width="500" height="500"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/animal.jpg"
          alt="Second slide"
          width="500" height="500"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/animal.jpg"
          alt="Third slide"
          width="500" height="500"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
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
  );
};
export default Home