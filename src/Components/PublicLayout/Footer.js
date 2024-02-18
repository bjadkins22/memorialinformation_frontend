import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#486173]">
        <div className="container p-6 md:py-24  lg:py-24 mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-1 gap-12">
            <div>
              <div className="text-teal-600">
                <img className="memoriallogoinfo" src="/img/Memorial 1.png" />
              </div>

              <p className="footermenu my-6 text-white">
                When the time comes, find <br /> support with us.
              </p>

              <ul className="flex gap-6">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-xl text-white transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>

                    <i className="fa fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-xl text-white transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>

                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-xl text-white transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>

                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="footer-headingcontnet">Quick Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="footermenu transition hover:opacity-75"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="footermenu transition hover:opacity-75"
                  >
                    About
                  </a>
                </li>

                <li>
                  <Link
                    to="/terms/condtions"
                    className="footermenu transition hover:opacity-75"
                  >
                    Terms & Conditions
                  </Link>
                </li>

                <li>
                  <a
                    href="#"
                    className="footermenu transition hover:opacity-75"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="footermenu transition hover:opacity-75"
                  >
                    Blog
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="footermenu transition hover:opacity-75"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="footer-headingcontnet">Newsletter</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <p className="footermenu my-6 text-white">
                    Stay updated with recent news. We promise not to spam!{" "}
                  </p>
                </li>

                <li>
                  <input
                    type="email"
                    className="footer-emailinput"
                    placeholder="Your Email"
                    required
                  />
                </li>
              </ul>
            </div>

            <div className="md:mx-1 sm:mx-6 ">
              <p className="footer-headingcontnet">Our Hours</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li className="our-hours">
                  <div className="houspaid-div">
                    <a href="#" className="footerhours-menu ">
                      Weekdays
                    </a>
                    <a href="#" className="footerhours-menu float-right">
                      9am-5pm
                    </a>
                  </div>
                </li>

                <li className="our-hours">
                  <div className="houspaid-div">
                    <a href="#" className="footerhours-menu ">
                      Saturday
                    </a>
                    <a href="#" className="footerhours-menu float-right">
                      9am-3pm
                    </a>
                  </div>
                </li>

                <li className="our-hours">
                  <div className="houspaid-div">
                    <a href="#" className="footerhours-menu ">
                      Weekdays
                    </a>
                    <a href="#" className="footerhours-menu float-right">
                      Closed
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="memrial-footer">
          <h1 className="copyright-footer">
            © Copyright 2023. All Rights Reserved Memorial Information Design
            and Developed By Studio45 Creations
          </h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;
