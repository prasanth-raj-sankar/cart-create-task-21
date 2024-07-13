import { useState } from "react";
import Cart from "./cart";
import data from "./carts.json";

const Carts = () => {
  const [cart, setCart] = useState([]);

  const handleAddFavorites = (item) => {
    const temp = [...cart, item];
    setCart(temp);
  };

  const removeFromFavorites = (itemId) => {
    const temp = cart.filter((t) => t.id !== itemId);
    setCart(temp);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ marginTop: '-36px' }}>
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="button">
                <i className="fa fa-shopping-cart me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
          </div>
        </div>
      </header>

      <div className="container mt-5">
        <div className="row">
          {data.map((item) => (
            <Cart
              key={item.id}
              id={item.id}
              product={item.product}
              price={item.price}
              offer={item.offer}
              sale={item.sale}
              rating={item.rating}
              cartbutton={item.cartbutton}
              addToFavorites={handleAddFavorites}
              removeFromFavorites={removeFromFavorites}
              isFavorite={Boolean(cart.find((f) => f.id === item.id))}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carts;
