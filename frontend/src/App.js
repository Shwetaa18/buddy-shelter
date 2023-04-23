
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom'
import Products from './components/Products';
import Product from './components/Product';
import Login from './components/login'
import Sidebar from './components/Sidebar';
import Register from './components/Register';
function App() {
  return (
    // <>
    //   <Login />
    // </>
    // <>
    //   <Register />
    // </>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/Products/:id" component={Product} />
        <Route path="/Products" component={Products} />
        <Route path="/" component={Home} />
      </Switch>
    </div>

    // <div className="container-fluid">
    //   <div className="row">
    //     <div className="col-md-3">
    //       <Sidebar />
    //     </div>
    //     <div className="col-md-9">
    //       {/* Your main content goes here */}
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
