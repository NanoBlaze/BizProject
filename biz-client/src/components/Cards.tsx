import { FunctionComponent, useEffect, useState } from "react";
import { Card } from "../interfaces/Card";
import { deleteCard, getAllCards } from "../services/cardsService";
import Navbar from "./Navbar";
import { getIsAdmin } from "../services/usersService";
import { Link } from "react-router-dom";
import { errorMsg, successMsg } from "../services/feedbacksService";
import { addToUserCart } from "../services/cartsService";
import Footer from "./Footer";

interface CardsProps {}

const Cards: FunctionComponent<CardsProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isChanged, setIsChanged] = useState<boolean>(false)

  useEffect(() => {
    getAllCards()
      .then((result) => setCards(result.data))
      .catch((error) => console.log(error));
  }, [isChanged]);

  const handleDelete = (card: Card) => {
    if (window.confirm(`Are you sure you want to delete ${card.name}`))
      deleteCard(card._id as string)
      .then(() => {setIsChanged(!isChanged);
       successMsg("Card deleted succssfully")})
      .catch((err) => errorMsg(err))
  };

  const handleAddToCart = (card: Card) => {
    card.quantity = 1;
    addToUserCart(card)
    .then(() =>{
      successMsg("Card wass added to cart")
    })
    .catch((err) => errorMsg(err))
  }
  return (
    <>
      <Navbar />
          <div className="wrapper">
        <div className="main2 ">
   <h1 className="text-home-banner py-5">Cards</h1>
        </div>
      </div>
      
      <div className="conatiner-fluid d-flex flex-wrap justify-content-center p-5 text-start">
   
        {cards.length ? (
          cards.map((card: Card) => (
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
              <div className="card-footer text-center">
                {getIsAdmin() ? (
                  <>
                  <div className="row pb-2">
                    <div className="col pe-1">
                    <Link
                      to={`edit/${card._id}`}
                      className="btn btn-primary w-100 "
                    >
                      <i className="fa-solid fa-pen-to-square"></i> Edit
                    </Link>
                    </div>
                    <div className="col ps-1">
                    <a
                      onClick={() => handleDelete(card)}
                      className="btn btn-danger w-100 "
                    >
                      <i className="fa-solid fa-trash"></i> Remove
                    </a>
                    </div>
                    </div>
                  </>
                  
                ) : null}
                
                <button onClick={() => handleAddToCart(card)} className="btn btn-success w-100">Add To Cart</button>
              </div>
            </div>
            
          ))
        ) : (
          <p className="text-center text-home">No cards in store! Only business users and admin are allowed to add cards.<br></br><span className="red"> Please create a business account to add cards.</span></p>
        )}

</div>


      
      {/* <div className="conatiner d-flex flex-wrap p-5">
     <div className="row">
        {cards.length ? (
          cards.map((card: Card) => (
            <div
              key={card._id}
              className="card mx-5 my-3 col-12"
              style={{ width: "18rem" }}
            >
              <img src={card.image} alt="Card Image Service" className="" />
              <div className="card-body">
                <h5 className="card-title">{card.name}</h5>
                <p className="card-text">{card.description}</p>
                <p className="card-text">in {card.address}</p>
              </div>
              <div className="card-footer text-center">
                <h5 className="card-title display-5 fs-1">
                  {card.phone}
                </h5>
                {getIsAdmin() ? (
                  <>
                    <Link
                      to={`edit/${card._id}`}
                      className="btn btn-warning mx-1"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <a
                      onClick={() => handleDelete(card)}
                      className="btn btn-danger mx-1"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </a>
                  </>
                ) : null}
                <button onClick={() => handleAddToCart(card)} className="btn btn-primary w-100">Add To Cart</button>
              </div>
            </div>
            
          ))
        ) : (
          <p className="text-center">No cards on store</p>
        )}
      </div></div> */}
  <Footer/>
    </>
  );
};

export default Cards;
