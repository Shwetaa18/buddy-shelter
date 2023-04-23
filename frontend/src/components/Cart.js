import React from 'react'
function Cart() {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <img src={product.images} alt={product.title} height="200px" width="180px"/>
                </div>
                <div className='col-md-4'>
                    <h3>{product.title}</h3>
                    <p className='lead fw-bold'>
                        {product.qty}*{product.price}
                    </p>
                    <button className='btn btn-outline-dark'onClick={()=>handlebutton(product)}/>
                    <i classname ="fa fa-minus"></i>
                    <button className='btn btn-outline-dark'onClick={()=>handlebutton(product)}/>
                    <i classname ="fa fa-plus"></i>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cart