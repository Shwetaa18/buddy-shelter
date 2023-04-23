
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Products() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState([{
    image:"/assets/image3.JPG",
    title:"Card 1",
    desc:"this is card 1"
  },
  {
    image:"/assets/image2.JPG",
    title:"Card 1",
    desc:"this is card 1"
  },
  {
    image:"/assets/image1.JPG",
    title:"Card 1",
    desc:"this is card 1"
  }
])
  const [loading, setLoading] = useState(false)

  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
  }
  const filterProduct = (y) => {
    const updatedList = data.filter((x) => x.category === y)
    // setFilter([1,2,3,4,5,6,6,7,7,8,9]);
  }
  const ShowProducts = () => {
    return (
      <div>
        <>
          <div className='buttons d-flex justify-content-center mb-5 pb-5'>
            <button className='btn btn-outline-dark me-2'>All</button>
            <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}> Dog For sale and Adoption</button>
            <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Cats For sale and Adoption</button>
          </div>
          {/* <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px1 ̰" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> */}
          <div className='d-flex flex-row'>
          {
            filter.map((product) => {
              return (
                <>
                  <Card style={{ width: '18rem' }} className='mx-5'>
                    <Card.Img variant="top" src={product.image}/>
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>
                        {product.desc}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>

                </>
              )
            })}
          </div>
          
        </>

      </div>
    )
  }
  return (
    <div>
      <Navbar />
      <div className="container my-5 py-5 ">
        <div className='row'>
          <div className='col-12 mb-5'>
            <h1 className='display-6 fw-bolder text-center'>Animal Rescue</h1>
            <hr />
          </div>
        </div>
        <div className='row justify-content-center'>
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>


    </div>
  )
}

export default Products

{/* <div className='col-md-3 mb-4'>
<div className="card h-100 text-center p-4" key={product.id}>
  <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
  <div className="card-body">
    <h5 className="card-title mb-0">{product.title}</h5>
    <p className="card-text fw-bold">${product.price}</p>
    <NavLink to={`/Products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
  </div>
</div>
</div> */}