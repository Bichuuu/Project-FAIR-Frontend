import React from 'react'

function Footer() {
  return (
    <>
 
    <footer className="footer-gradient pt-4">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <h5>About Us</h5>
            <p>
              At <span className="text-light fw-bold">TRAZOX</span>, we believe in empowering your style. Our curated collection of fashion-forward apparel and accessories is designed to make you look and feel your best. With a commitment to quality, affordability, and sustainability, we bring you the latest trends that suit every occasion. Join us in redefining fashion with a touch of elegance and individuality.
            </p>
          </div>

          <div className="col-md-2">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Products
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Support
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="#!" className="text-white text-decoration-none">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="me-3">
                <a href="#!" className="text-white text-decoration-none">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="me-3">
                <a href="#!" className="text-white text-decoration-none">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5>Contact Us</h5>
            <p>Email: bichu@gmail.com</p>
            <p>Phone: 1234567890</p>
            <p>Address: Calicut, India</p>
          </div>

          <div className="col-2 mt-4">
            <h5>Search</h5>
            <form className="d-flex">
              <input
                type="text"
                className="form-control me-2 rounded-pill"
                placeholder="Search here..."
              />
              <button type="submit" className="btn btn-light rounded-pill">
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} trazox. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>

    </>
  )
}

export default Footer