import React from 'react';

const LoginPage = () => {
  return (
    <>
      <section className="vh-100">
        <div className="container-fluid m-4 h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5" style={{ objectFit: 'cover' }}>
              <img src="/image/b2.png" className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style={{ boxShadow: '2px 3px 6px 8px grey' }}>
              {/* Pills navs */}
              <ul className="nav nav-pills nav-justified mb-3 my-1" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active bg-dark text-danger"
                    id="tab-login"
                    data-mdb-pill-init
                    href="#pills-login"
                    role="tab"
                    aria-controls="pills-login"
                    aria-selected="true"
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link text-danger bg-dark"
                    id="tab-register"
                    data-mdb-pill-init
                    href="#pills-register"
                    role="tab"
                    aria-controls="pills-register"
                    aria-selected="false"
                  >
                    Register
                  </a>
                </li>
              </ul>
              {/* Pills navs */}

              {/* Pills content */}
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="pills-login"
                  role="tabpanel"
                  aria-labelledby="tab-login"
                >
                  <form>
                    <div className="text-center mb-3 text-danger">
                      <p>Sign in with:</p>
                      <button data-mdb-ripple-init type="button" className="btn btn-dark btn-floating mx-1">
                        <i className="fab fa-facebook-f text-danger"></i>
                      </button>

                      <button data-mdb-ripple-init type="button" className="btn btn-dark btn-floating mx-1">
                        <i className="fab fa-google text-danger"></i>
                      </button>
                    </div>

                    <p className="text-center text-danger">or:</p>

                    {/* Email input */}
                    <i className="fi fi-sr-envelope text-secondary"></i>
                    <small className="text-danger">Email / Mobile</small>
                    <div data-mdb-input-init className=" form-outline mb-4 ">
                      <input
                        type="email"
                        id="loginName"
                        className="form-control text-danger"
                        placeholder="abc@gmail.com | 1234567890"
                      />
                    </div>

                    {/* Password input */}
                    <i className="fi fi-sr-lock text-secondary"></i>
                    <small className="text-danger">Password</small>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="password"
                        id="loginPassword"
                        className="form-control text-danger"
                        placeholder="*****"
                      />
                    </div>

                    {/* 2 column grid layout */}
                    <div className="row mb-4">
                      <div className="col-md-6 d-flex justify-content-center">
                        {/* Checkbox */}
                        <div className="form-check mb-3 mb-md-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="loginCheck"
                            checked
                          />
                          <label className="form-check-label" htmlFor="loginCheck">
                            Remember me
                          </label>
                        </div>
                      </div>

                      <div className="col-md-6 d-flex justify-content-center">
                        {/* Simple link */}
                        <a href="ForgotPassword.php" className="text-danger">
                          Forgot password?
                        </a>
                      </div>
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="btn btn-dark text-danger btn-block mb-4">
                      Sign in
                    </button>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-register"
                  role="tabpanel"
                  aria-labelledby="tab-register"
                >
                  <form>
                    <div className="text-center mb-3">
                      <p className="text-danger">Sign up with:</p>
                      <button data-mdb-ripple-init type="button" className="btn btn-dark btn-floating mx-1">
                        <i className="fab fa-facebook-f text-danger"></i>
                      </button>

                      <button data-mdb-ripple-init type="button" className="btn btn-dark btn-floating mx-1">
                        <i className="fab fa-google text-danger"></i>
                      </button>
                    </div>

                    <p className="text-center">or:</p>

                    {/* Name input */}
                    <i className="fi fi-sr-envelope text-secondary"></i>
                    <small className="text-danger">Name</small>
                    <input
                      type="text"
                      id="registerName"
                      className="form-control text-danger  border border-danger mb-4 bg-black"
                      placeholder="krida"
                      required
                    />

                    {/* mobile input */}
                    <i className="fi fi-sr-mobile-button text-secondary"></i>
                    <small className="text-danger">Mobile</small>
                    <input
                      type="tel"
                      id="registerUsername"
                      className="form-control text-danger border border-danger bg-black mb-4"
                      required
                      placeholder="Mobile Number"
                      pattern="[0-9]{10}"
                      maxLength="10"
                    />

                    {/* Email input */}
                    <i className="fi fi-sr-envelope text-secondary"></i>
                    <small className="text-danger">Email *</small>
                    <input
                      type="email"
                      id="registerEmail"
                      className="form-control text-danger  border border-danger mb-4 bg-black"
                      placeholder="abc@gmail.com"
                    />

                    {/* Password input */}
                    <i className="fi fi-sr-lock text-secondary"></i>
                    <small className="text-danger">Password</small>
                    <input
                      type="password"
                      id="registerPassword"
                      className="form-control text-danger  border border-danger mb-4 bg-black"
                      placeholder="*****"
                      required
                    />

                    {/* Repeat Password input */}
                    <i className="fi fi-sr-lock text-secondary"></i>
                    <small className="text-danger">Repeat Password</small>
                    <input
                      type="password"
                      id="registerRepeatPassword"
                      className="form-control text-danger  border border-danger mb-4 bg-black"
                      placeholder="*****"
                      required
                    />

                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="registerCheck"
                        checked
                        aria-describedby="registerCheckHelpText"
                      />
                      <label className="form-check-label text-danger" htmlFor="registerCheck">
                        I have read and agree to the terms
                      </label>
                    </div>

                    {/* Submit button */}
                    <button data-mdb-ripple-init type="submit" className="btn btn-dark text-danger  btn-block mb-3">
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
              {/* Pills content */}
            </div>
          </div>
        </div>
        <section>
          <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-dark mb-0">
            {/* Copyright */}
            <div className=" mb-3 mb-md-0 text-danger">Copyright © Krida. All rights reserved.</div>
            {/* Copyright */}

            {/* Right */}
            <div>
              <a href="#!" className="text-danger me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#!" className="text-danger me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#!" className="text-danger me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="#!" className="text-danger">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            {/* Right */}
          </div>
        </section>
      </section>
    </>
  );
};

export default LoginPage;
