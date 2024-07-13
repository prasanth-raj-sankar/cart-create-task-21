import React from "react";
import PropTypes from "prop-types";
import "./cart.css";

const Cart = ({ id,product, price,offer,sale, rating,cartbutton, addToFavorites,removeFromFavorites,isFavorite = false, }) => {
  return (

    <>
   
    <div className="col-lg-3 mb-4 text-center">
      {/* <div className="card" style={{ width: "100%",height:"100%" }}> */}

      <div className="card">
        <span
          className={sale ? "badge bg-dark text-white position-absolute" : ""}
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          {sale ? "Sale" : null}{" "}
        </span>

        <img
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="">{product}</h5>
          {rating ? (
            <div className="d-flex justify-content-center small text-warning mb-2">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>{" "}
            </div>
          ) : null}
          {/* <p className="card-text">{price}</p> */}
          {offer ? (<><span className="text-muted text-decoration-line-through">${price}</span>
                     <span>${offer}</span></>) : 
                     (<span>${price}</span>)}
          <div>
          {/* <button type="button" className="btn btn-outline-dark" onClick={onAddToCart}>{cartbutton}</button> */}
          {isFavorite ? (
        <button onClick={() => removeFromFavorites(id)}>
          Remove From My Cart
        </button>
      ) : (
        <button
          // Create one more which will execute addToFavorites
          onClick={() => {
            addToFavorites({
              id,
              product, price,offer,sale, rating,cartbutton,
            });
          }}
        >
          {cartbutton}
        </button>
      )}
          </div>           
        </div>
      </div>
    </div>
   
    </>
    
  );
  
};


Cart.propTypes = {
  id: PropTypes.number.isRequired,
  product: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isPrice: PropTypes.bool,
  offer: PropTypes.string,
  isOffer: PropTypes.bool,
  sale: PropTypes.bool,
  rating: PropTypes.bool,
  cartbutton: PropTypes.string,
  addToFavorites: PropTypes.func,
  removeFromFavorites: PropTypes.func,
  isFavorite: PropTypes.bool,

};

export default Cart;
