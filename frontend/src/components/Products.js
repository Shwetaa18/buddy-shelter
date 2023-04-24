
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Products() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
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
    setFilter(updatedList);
  }

  const ShowProducts = () => {

    return (
      <>
        <div className='buttons d-flex justify-content-center mb-5 pb-2'>
          <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>All</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("")}> Dog For sale and Adoption</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("")}>Cats For sale and Adoption</button>
        </div>
        {
          filter.map((product) => {
            return (
              <>
                <div className='col-md-3 mb-4'>
                  <div className="card h-100 text-center p-4" key={product.id}>
                    <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                    <div className="card-body">
                      <h5 className="card-title mb-0">{product.title}</h5>
                      <p className="card-text fw-bold">${product.price}</p>
                      <NavLink to={`/Products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
      </>
    )
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <div className="container my-4 border-bottom border-dark ">
          <div className='row'>
            <div className='col-12 '>
              <h1 className='display-6 fw-bolder text-center'>Animal Rescue</h1>
            </div>
          </div>
          <div className='row justify-content-center '>
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>

      <div className='container border border-dark col-12 my-3 '>
        {/* <Card className='mx-2' style={{ width: '18rem' }}>
          <Card.Img className='my-2' variant="top" src="./assets/animal.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              <a><b>name</b>:- reo</a><br></br>
              <a><b>age</b>:- 4years</a><br></br>
              <a><b>breed</b>:- lab</a><br></br>
              <a><b>discription</b>:- it is a very good dog ,, and well trained ,decipline and well manner</a>
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>add</Button>
          </Card.Body>
        </Card> */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Adobtion form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Full name </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>mobile Number </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>cancel</Button>
            <Button variant="primary" onClick={handleClose}>add to cart</Button>
          </Modal.Footer>
        </Modal>
        <Table striped bordered hover className='my-2 mx-2 mb-2 '>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>age</th>
              <th>color</th>
              <th>description</th>
              <th><img src=''></img></th>
              <th>click to add</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Zeoy</td>
              <td>2</td>
              <td>White</td>
              <td>Fully train dog with good IQ</td>
              <td>image</td>
              <td><Button onClick={handleShow}>Add</Button></td>
            </tr>
          </tbody>
        </Table>

      </div>
      <div className='footer my-5'>
      </div>
    </>
  )
}
export default Products