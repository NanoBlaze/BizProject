import { FunctionComponent, useEffect, useState } from "react";
import { Card } from "../interfaces/Card";
import { deleteCart, getUserCart } from "../services/cartsService";
import { errorMsg, successMsg } from "../services/feedbacksService";
import Footer from "./Footer";
import Navbar from "./Navbar";
interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
  const [cart, setCart] = useState<Card[]>([]);
  const [isChanged, setIsChanged] = useState<boolean>(false)
  useEffect(() => {
    getUserCart()
      .then((result) => {
        setCart(result.data);
        console.log(cart);
      })
      .catch((err) => console.log(err));
  }, []);



  return (
    <>
      <Navbar />
                <div className="wrapper">
        <div className="main2 ">
   <h1 className="text-home-banner py-5">Cart</h1>
        </div>
      </div>
      <div className="conatiner-fluid d-flex flex-wrap justify-content-center p-5 text-start">
   
        {cart.length ? (
          cart.map((card: Card) => (
            <div
              key={card._id}
              className="card mx-3 my-3 col-12 "
              style={{ width: "18rem" }}
            >
              <img src={card.image} alt="Card Image Service" className="" />
              <div className="card-body">
                <p className="card-text"><b>Name:</b> {card.name}</p>
                <p className="card-text"><b>Description:</b> {card.description}</p>
                <p className="card-text"><b>Address:</b> {card.address}</p>
                <p className="card-text"><b>Phone:</b> 0{card.phone}</p>

              </div>

            </div>
            
          ))
        ) : (
          <p className="text-center text-home">Your cart is empty.<br></br><span className="red"> Please add card to view it.</span></p>
        )}

</div>
    
      <Footer/>
    </>
  );
};

export default Cart;
