import { FunctionComponent } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="main">
          <img
            className="img-fluid2"
            src="https://i.gyazo.com/56e2451352d6e2e3ea81fa88217af02c.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="homeBanner ">
        <div className="container py-4">
          <div className="row">
            <div className="col-12">
              <p className="text-home">
                Hello and welcome to <span className="red"> GameCom!</span>
                <hr></hr>
              </p>

              <p className="text-home2">
                GameCom is a home for<span className="red"> gamers </span>from{" "}
                <span className="red">gamers!</span> <br></br>
                We specilaize at providing custom gaming services, gaming rooms,
                gaming consoles and everything else every gamer needs.{" "}
              </p>
            </div>
          </div>

          <p className="text-home2">
            We have 2 different user services we provide:<br></br>
          </p>

<div className="row pt-4">
  <div className="col-6 ">
          <div className="card mx-auto" style={{ width: "30rem" }}>
            <div className="card-body ">
              <i className="fa-solid fa-user text-light rounded bg-main p-2 fs-5"></i><h5 className="card-title pt-3 card-text-head ">Free User</h5>
                    <hr></hr>
              <div className="d-flex mx-auto align-items-center justify-content-center py-2 card-text-services">
              <i className="fa-solid fa-square-check green rounded fs-4 pe-1"></i> {" "} View cards
              </div>
              <div className="d-flex mx-auto align-items-center justify-content-center py-2 card-text-services">
              <i className="fa-solid fa-square-check green rounded fs-4 pe-1"></i> {" "} Add cards to personal cart
              </div>
              <div className="d-flex mx-auto align-items-center justify-content-center py-2 card-text-services">
              <i className="fa-solid fa-square-xmark red rounded fs-4 pe-1"></i> {" "} Create Cards
              </div>
              <div className="d-flex mx-auto align-items-center justify-content-center py-2 card-text-services">
              <i className="fa-solid fa-square-xmark red rounded fs-4 pe-1"></i> {" "} Edit existing cards
              </div>
              <div className="d-flex mx-auto align-items-center justify-content-center py-2 card-text-services">
              <i className="fa-solid fa-square-xmark red rounded fs-4 pe-1"></i> {" "} Remove existing cards
              </div>
              <div className="d-flex mx-auto align-items-center justify-content-center py-2 card-text-services">
              <i className="fa-solid fa-square-check green rounded fs-4 pe-1"></i> {" "} 24/7 Support
              </div>

            </div>
          </div>
          </div>
  <div className="col-6 ">
          <div className="card mx-auto" style={{ width: "30rem" }}>
            <div className="card-body ">
              <i className="fa-solid fa-user-plus text-light rounded bg-main p-2 fs-5"></i><h5 className="card-title pt-3 card-text-head ">Premium User</h5>
                    <hr></hr>
              <div className="d-flex mx-auto align-items-center justify-content-center py-2 card-text-services">
              <i className="fa-solid fa-square-check green rounded fs-4 pe-1"></i> {" "} View cards
              </div>
              <div className="d-flex mx-auto align-items-center justify-content-center py-2 card-text-services">
              <i className="fa-solid fa-square-check green rounded fs-4 pe-1"></i> {" "} Add cards to personal cart
              </div>
              <div className="d-flex mx-auto align-items-center justify-content-center py-2 card-text-services">
              <i className="fa-solid fa-square-check green rounded fs-4 pe-1"></i> {" "} Create Cards
              </div>
              <div className="d-flex mx-auto align-items-center justify-content-center py-2 card-text-services">
              <i className="fa-solid fa-square-check green rounded fs-4 pe-1"></i> {" "} Edit existing cards
              </div>
              <div className="d-flex mx-auto align-items-center justify-content-center py-2 card-text-services">
              <i className="fa-solid fa-square-check green rounded fs-4 pe-1"></i> {" "} Remove existing cards
              </div>
              <div className="d-flex mx-auto align-items-center justify-content-center py-2 card-text-services">
              <i className="fa-solid fa-square-check green rounded fs-4 pe-1"></i> {" "} 24/7 Support
              </div>

            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
