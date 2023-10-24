import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./navbar.css";
import FlameText from "../FlameText";
const Navbar = ({ showAbout, showMusic, showContact, showGallery, showVideo }) => {
  const [scrolledNav, setScrolledNav] = useState(false);
  const [scrolledOffset, setScrolledOffset] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  const detectScrollDirection = () => {
    const down = window.scrollY > scrolledOffset;
    setScrollingDown(down);
    setScrolledOffset(window.scrollY);
  };

  const toggleMenu = () => {
    if (smallScreen) {
      setShowMenu(!showMenu);
      document.body.classList.toggle("hide");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 250) {
        setScrolledNav(true);
      } else {
        setScrolledNav(false);
      }
      detectScrollDirection();
    });

    if (window.innerWidth <= 980) {
      setSmallScreen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 980) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", detectScrollDirection);
      window.removeEventListener("resize", () => {
        if (window.innerWidth <= 980) {
          setSmallScreen(true);
        } else {
          setSmallScreen(false);
        }
      });
    };
  }, []);

  return (
    <div className="relative w-full  ">
      <nav
        id="nav"
        className={`${
          scrollingDown && !(showMenu && smallScreen) ? "down" : ""
        } ${scrolledNav ? "scrolled" : ""} ${
          smallScreen && showMenu ? "scrolled" : ""
        }`}
      >
        <div className="container w-full bg-transparent ">
          <div className="content px-4">
            <div className="logo">
              <FlameText />
            </div>

            <ul
              className={
                smallScreen && showMenu ? "show links" : "links text-xl"
              }
            >
              <li>
                <Link
                  to="header"
                  spy={true}
                  smooth="easeInOutQuad"
                  duration={2500}
                  onClick={showAbout}
                  className="text-2xl"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="music"
                  spy={true}
                  smooth="easeInOutQuad"
                  duration={2500}
                  onClick={showMusic}
                >
                  Music
                </Link>
              </li>
              <li>
                <Link
                  to="videos"
                  spy={true}
                  smooth="easeInOutQuad"
                  duration={2500}
                  onClick={showVideo}
                >
                  Videos
                </Link>
              </li>
              <li>
                <Link
                  to="gallery"
                  spy={true}
                  smooth="easeInOutQuad"
                  duration={2500}
                  onClick={showGallery}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="header"
                  spy={true}
                  smooth="easeInOutQuad"
                  duration={2500}
                  onClick={showContact}
                >
                  Contact Me
                </Link>
              </li>
            </ul>
            <div id="bars" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>
      </nav>
      <style jsx>{`
        #nav {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 5;
          transition: all 0.2s linear;
        }

        #nav .content {
          height: 90px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
        }
        #nav .content .logo {
          cursor: pointer;
        }
        #nav .content .logo h2 {
          color: #ffe63c;
          text-transform: uppercase;
          font-family: Exo_Black;
          font-size: 30px;
        }
        #nav .content ul {
          display: flex;
        }
        #nav .content ul li {
          padding-left: 5px;
          padding-right: 5px;
        }
        #nav .content ul li:last-of-type {
          padding-right: 0;
        }

        #nav.scrolled {
          position: fixed;
          background-color: #fff;
          border-bottom: 0;
          box-shadow: 0 0px 2px #4d4d4d;
        }

        #nav.scrolled .content .logo h2 {
          color: #000;
        }
        #nav.down {
          transform: translateY(-90px);
        }

        #nav #bars {
          width: 60px;
          height: 25px;
          cursor: pointer;
          position: relative;
          display: none;
        }
        #nav #bars .bar {
          display: block;
          width: 100%;
          height: 1px;
          background-color: #fff;
          position: absolute;
        }
        #nav.scrolled #bars .bar {
          background-color: #000;
        }
        #nav #bars .bar:first-of-type {
          top: 0;
        }
        #nav #bars .bar:nth-of-type(2) {
          top: 12.5px;
          left: 0;
          right: 0;
          margin-left: auto;
          margin-right: auto;
          transition: all 0.1s ease-in-out;
        }
        #nav #bars .bar:last-of-type {
          bottom: 0;
        }
        #nav #bars:hover .bar:nth-of-type(2) {
          width: 80%;
        }

        @media (max-width: 980px) {
          #nav #bars {
            display: block;
          }
          #nav {
            border-bottom: 0;
          }

          #nav .content ul {
            position: absolute;
            top: 90px;
            left: 0;
            right: 0;
            background-color: #fff;
            height: 100vh;
            overflow-y: scroll;
            display: none;
            border-top: 1px solid #eee;
          }
          #nav .content ul.show {
            display: block;
          }
          #nav .content ul li {
            padding: 0;
          }
        }
      `}</style>
      <style jsx global>
        {`
          body.hide {
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
