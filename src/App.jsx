import { useState } from "react";
import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

function App() {
  const [openBasic, setOpenBasic] = useState(false); // Add this line

  return (
    <>
    {/* NavBar */}
      <MDBNavbar expand="lg" light bgColor="black">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img
              src="../public/images/BrandName.png"
              height={30}
              alt="logo"
              className="navbar-brand mt-2 mt-lg-0"
            />
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon className="text-danger" icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav className="  mx-auto mb-lg-0 d-flex justify-content-evenly ">
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="#"
                  className="text-light"
                >
                  Blogs
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Link</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="#"
                  className="text-light"
                >
                  Point System
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Link</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="#"
                  className="text-light"
                >
                  About Us
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Link</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="#"
                  className="text-light"
                >
                  Contact Us
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Link</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className="d-flex input-group w-auto">
              <a href="/user_login.jsx">
                <MDBBtn
                  className="btn btn-md shadow-6 text-light me-2 bg-dark"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <i className="fi fi-sr-arrow-right text-danger "></i>
                </MDBBtn>
              </a>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      {/* carousel */}
      <MDBCarousel showControls style={{ height: "50vh" }}>
        <MDBCarouselItem itemId={1}>
          <img
            src="https://mdbootstrap.com/img/new/slides/041.jpg"
            style={{ height: "50vh" }}
            className="d-block w-100"
            alt="..."
          ></img>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img
            src="https://mdbootstrap.com/img/new/slides/042.jpg"
            style={{ height: "50vh" }}
            className="d-block w-100"
            alt="..."
          ></img>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img
            src="https://mdbootstrap.com/img/new/slides/043.jpg"
            style={{ height: "50vh" }}
            className="d-block w-100"
            alt="..."
          ></img>
        </MDBCarouselItem>
      </MDBCarousel>

      {/* Importance */}
      <div className="row text-center mx-auto d-flex justify-content-evenly align-items-center mt-lg-5 m-0">
        <h3 className="text-danger">
          Some Easy Steps To Play Fantasy Games With Us..
        </h3>
        <div className="col-lg-3 col-10 text-secondary p-3">
          <i className="fi fi-rs-cricket text-danger fa-3x"></i>
          <br></br>
          <span style={{ fontSize: "2rem" }} className="text-danger">
            Select a Match
          </span>
          <br />
          Select the upcoming matches in Contest
        </div>
        <div className="col-lg-4 col-10 text-secondary p-3">
          <i className="fi fi-rs-check-circle fa-2x text-danger"></i>
          <br></br>
          <span style={{ fontSize: "2rem" }} className="text-danger">
            Get ready
          </span>
          <br />
          Deposit Money And get ready for play betting
        </div>
        <div className="col-lg-3 col-10 text-secondary p-3">
          <i className="fi fi-rs-smile-beam fa-2x text-danger"></i>
          <br />
          <span style={{ fontSize: "2rem" }} className="text-danger">
            Enjoy
          </span>
          <br></br>
          Betting More And More & Enjoy the game
        </div>
      </div>
     
      {/* Spin */}
      <div className="container mt-lg-4 p-lg-4 p-1">
        <div className="row">
          <div className="col-lg-5 col-10 p-lg-4 p-3">
            <img src="/images/coprative.png" className="img-fluid" alt="spin" />
          </div>
          <div className="col-lg-5 col-12 p-lg-4 p-3">
            <h2 className="text-danger">Unlock Free Points</h2>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae provident amet sunt eveniet iusto voluptatibus autem
              incidunt, nesciunt reiciendis perferendis impedit rerum aperiam
              quidem, dolor dolorum doloribus iure facilis nihil id rem soluta
              veritatis fuga blanditiis voluptatem? Libero ex voluptate sunt,
              nam laborum vitae dicta!
            </p>
            <button className="btn bg-danger text-light">Claim Now</button>
          </div>
        </div>
      </div>

      {/* Frequently asked Question */}
      <section>
        <div className="container-fluid mt-lg-5 mt-3">
          <div className="row mx-auto">
            <div className="col-lg-6 col-12 text-start">
              <h3 className="text-center text-warning">Frequently Asked Questions</h3>
              <details
                className="border border-danger p-lg-2 p-1 m-lg-2 mt-2 questions"
                style={{ color: "#de7777", backgroundColor: "#131313" }}
              >
                <summary style={{ color: "#d63838" }}>
                  What is Fantasy Sports?{" "}
                </summary>
                <p>
                  Fantasy sports is a strategy-based online sports game where
                  you can create a virtual team of real players, playing in live
                  matches worldwide. You earn points and win cash prizes based
                  on the performances of these players in actual matches.
                </p>
              </details>
              <details
                className="border border-danger p-2 m-lg-2 mt-2 questions"
                style={{ color: "#de7777", backgroundColor: "#131313" }}
              >
                <summary style={{ color: "#d63838" }}>
                  Is it safe to add money to Dream11?{" "}
                </summary>
                <p>
                  Adding money to your Dream11 account is both simple and safe.
                  We have many different payment options enabled on Dream11 to
                  ensure that your personal details are safe with us. What's
                  more? After you verify your personal details, you can withdraw
                  the money that you win on Dream11 directly to your bank
                  account.
                </p>
              </details>
              <details
                className="border border-danger p-2 m-lg-2 mt-2 questions "
                style={{ color: "#de7777", backgroundColor: "#131313" }}
              >
                <summary style={{ color: "#d63838" }}>
                  How are Dream11 points calculated?{" "}
                </summary>
                <p>
                  Dream11 points system is calculated on the basis of the
                  performance of the player in an actual match. Check Dream11
                  Fantasy Points System for various sports.{" "}
                </p>
              </details>
              <details
                className="border border-danger p-2 m-lg-2 mt-2 questions"
                style={{ color: "#de7777", backgroundColor: "#131313" }}
              >
                <summary style={{ color: "#d63838" }}>
                  When do I get my winnings?{" "}
                </summary>
                <p>
                  A successfully processed withdrawal request via IMPS should
                  get credited almost instantly or within 3 working days. NEFT
                  should get credited within 3 working days for more details,
                  see this question posted on our helpdesk.
                </p>
              </details>
              <details
                className="border border-danger p-2 m-lg-2 mt-2 questions"
                style={{ color: "#de7777", backgroundColor: "#131313" }}
              >
                <summary style={{ color: "#d63838" }}>
                  {" "}
                  How do I use the Dream11 discount coupon code?{" "}
                </summary>
                <p>
                  <ul>
                    <li> Go to ‘Rewards’ at the bottom right corner</li>
                    <li>
                      {" "}
                      Click on ‘My Rewards’ and tap on ‘Have a discount coupon
                      code?’
                    </li>
                    <li> Enter your code, tap ‘Apply now'</li>
                    <li> Enter any contest and enjoy your discount</li>
                  </ul>
                </p>
              </details>
              <details
                className="border border-danger p-2 m-lg-2 mt-2 questions"
                style={{ color: "#de7777", backgroundColor: "#131313" }}
              >
                <summary style={{ color: "#d63838" }}>
                  {" "}
                  How should I download the Dream11 app?{" "}
                </summary>
                <p>
                  {" "}
                  There are 3 ways in which you can download the Dream11 app.
                  <ol>
                    <li>
                      {" "}
                      Head to www.dream11.com on your desktop or mobile browser
                      and enter your mobile number to get the download link
                    </li>
                    <li>
                      {" "}
                      Alternatively, you can also give us a missed call on
                      1800-572-9878 to get the download link{" "}
                    </li>
                    <li>
                      {" "}
                      If you're an iOS user, you can also search for ‘Dream11’
                      in the App Store and download the app
                    </li>
                  </ol>
                </p>
              </details>
              <details
                className="border border-danger p-2 m-lg-2 mt-2 questions"
                style={{ color: "#de7777", backgroundColor: "#131313" }}
              >
                <summary style={{ color: "#d63838" }}>
                  {" "}
                  Which type of contests can I join?{" "}
                </summary>
                <p>
                  Select your favourite sport, click on a match from that sport,
                  create your Dream11 and join any public, private, head-to-head
                  or mega contests. <br></br>
                  You can also choose to join paid contests by paying the
                  contest entry amount or hone your skills by entering practice
                  contests before you compete with others.
                </p>
              </details>
              <details
                className="border border-danger p-2 m-lg-2 mt-2 questions"
                style={{ color: "#de7777", backgroundColor: "#131313" }}
              >
                <summary style={{ color: "#d63838" }}>
                  {" "}
                  How to Play on Dream11 App?{" "}
                </summary>
                <p>
                  Log in with your mobile number to register on Dream11 App.
                  Follow the instructions as you set up your player profile.
                  Once done, follow the steps to participate in this game of
                  mind and thrills!
                  <ul>
                    <li>Select the match</li>
                    <li>Pay entry fee and join contests</li>
                    <li>
                      Put your skills to test and create your Fantasy team
                    </li>
                    <li>
                      Check the real-time leaderboard while you watch the match
                      LIVE
                    </li>
                  </ul>
                  for more details, visit the how to play fantasy cricket page.
                </p>
              </details>
              ;{/* Other FAQ details go here */}
            </div>
            {/* Today Tournament */}
            <div className="col-lg-6 col-12 text-center">
              <h3 className="text-warning " style={{ fontSize: "1.5rem" }}>
                Today's Tournament
              </h3>
              <div className="card" style={{ backgroundColor: "#131313" }}>
                <div className="card-body">
                  <div className="card-title row d-flex justify-content-center align-items-center">
                    <div className="col-lg-5 col-12 text-danger">
                      <h4>Time Remaining</h4>
                    </div>
                    <div className="col-lg-2 col-3 border border-danger p-2 m-1 text-danger">
                      03 <br /> Hours
                    </div>
                    <div className="col-lg-2 col-3 border border-danger p-2 m-1 text-danger">
                      44 <br /> Mins
                    </div>
                    <div className="col-lg-2 col-3 border border-danger p-2 m-1 text-danger">
                      01 <br /> Sec
                    </div>
                  </div>
                </div>
                <p className="card-text">
                  {/* Additional details about today's tournament go here */}
                  <div className="row">
                    <div className="col-lg-6">matches </div>
                    <div className="col-lg-6">location</div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Subscibe & Payment  */}
      <section>
      <div className="container-fluid bg-danger mt-lg-5 mt-3">
        <div className="row">
          {/* <!-- subscribe for others --> */}
          <div
            className="col-lg-6 col-12 text-center p-4"
            style={{ backgroundColor: '#131313' }}
          >
            <h5 className="text-danger p-4"> Subscribe For Offers </h5>
            <div className="row g-0">
              <div className="col-lg-10 col-10" data-mdb-input-init>
                <input
                  type="email"
                  id="typeEmail"
                  className="form-control w-full bg-dark text-danger border border-danger"
                  placeholder="Enter Your Email First .."
                />
              </div>
              <div className="col-lg-2 col-2 d-flex justify-content-start align-items-center">
                <button className="btn btn-sm bg-danger ms-1">
                  <i className="fi fi-rs-paper-plane text-light"></i>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- payement method --> */}
          <div
            className="col-lg-6 col-12 p-4"
            style={{ backgroundColor: '#131313' }}
          >
            <h3 className="text-danger text-center"> Our Supporting Partners </h3>
            <div className="row">
              <img
                src="/images/G-Pay.png"
                className="col-lg-3 col-3 p-5"
                alt="Google pay"
              />
              <img
                src="/images/paypal.png"
                className="col-lg-3 col-3 p-5"
                alt="Paypal"
              />
              <img
                src="/images/Upi.png"
                className="col-lg-3 col-3 p-5"
                alt="upi"
              />
              <img
                src="/images/Visa.png"
                className="col-lg-3 col-3 p-5"
                alt="visa"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Footer Section */}
    <section>
      <div className="row">
        <div className="col-lg-4">
          <h3 className="text-danger text-center">About Krida</h3>
          <p className="text-secondary p-2">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, odit
            tenetur! Distinctio quasi unde laboriosam architecto perferendis
            cupiditate neque! Quia iusto corporis earum optio, enim corrupti
            itaque sint ipsum ducimus eum quidem deserunt voluptas ipsa omnis
            mollitia eaque error obcaecati doloremque facere repellat illo
            dolorum voluptates neque. Dignissimos, ab sint.
          </p>
          {/* <!-- social media links --> */}
          <div className="d-flex justify-content-evenly align-items-center">
            <i className="fi fi-brands-facebook text-danger fa-2x "></i>
            <i className="fi fi-brands-twitter-alt-circle text-danger fa-2x"></i>
            <i className="fi fi-brands-instagram text-danger fa-2x"></i>
            <i className="fi fi-brands-linkedin text-danger fa-2x"></i>
          </div>
        </div>
        <div className="col-lg-4">
          <h3 className="text-danger text-center">Important links</h3>
          <div className="row">
            <div className="col-lg-6 col-6 text-secondary ">
              <p>Live Score</p>
              <p>How To Play</p>
              <p>Tournament</p>
              <p>registration bonus</p>
              <p>Contact</p>
            </div>
            <div className="col-lg-6 col-6 text-secondary ">
              <p>Help Desk</p>
              <p>FAQ</p>
              <p>Support</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <h3 className="text-danger text-center">Security info</h3>
          <div className="row">
            <div className="col-lg-12 col-6">
              <div className="d-flex justify-content-center align-items-center">
                <i className="fi fi-rs-shield-check text-danger fa-2x me-2"></i>
                <h3 className="text-secondary">Safe & secure Banking</h3>
              </div>
            </div>
            <div className="col-lg-12 col-6">
              <div className="d-flex justify-content-center align-items-center">
                <i className="fi fi-rs-trophy text-danger fa-2x me-2"></i>
                <h3 className="text-secondary">
                  Total <span className="text-danger">123</span> Register User
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default App;
